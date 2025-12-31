import { useState, useEffect, useCallback, useRef } from "react";
import { Form, Input, Button, message, Card, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";
import SvgBackground from "./components/SvgBackGround";

const { Title } = Typography;

// SVG Background Component

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Custom hook logic for countdown would be here, but we'll put it in useEffect
  const [countdown, setCountdown] = useState(0);

  // Generate Captcha
  const generateCaptcha = useCallback(() => {
    if (isLocked) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#f0f2f5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Random Code
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);

    // Draw Code
    ctx.font = "bold 24px Arial";
    ctx.textBaseline = "middle";

    for (let i = 0; i < 4; i++) {
      const x = 20 + i * 20;
      const y = canvas.height / 2;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((Math.random() - 0.5) * 0.4);
      ctx.fillStyle = `rgb(${Math.random() * 100},${Math.random() * 100},${
        Math.random() * 100
      })`;
      ctx.fillText(code[i], 0, 0);
      ctx.restore();
    }

    // Noise
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        1,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
  }, [isLocked]);

  // Check Lock Status on Mount
  useEffect(() => {
    const storedLockTime = localStorage.getItem("login_lockout_time");
    const now = Date.now();

    if (storedLockTime && parseInt(storedLockTime) > now) {
      setIsLocked(true);
      setLockoutTime(parseInt(storedLockTime));
      setCountdown(Math.ceil((parseInt(storedLockTime) - now) / 1000));
    } else {
      // Clear expired lock
      if (storedLockTime) {
        localStorage.removeItem("login_lockout_time");
        localStorage.removeItem("captcha_error_count");
      }
      setTimeout(generateCaptcha, 100); // Wait for canvas render
    }
  }, [generateCaptcha]);

  // Countdown Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLocked && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          const next = prev - 1;
          if (next <= 0) {
            setIsLocked(false);
            localStorage.removeItem("login_lockout_time");
            localStorage.removeItem("captcha_error_count");
            setTimeout(generateCaptcha, 100);
            return 0;
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isLocked, countdown, generateCaptcha]);

  const onFinish = async (values: any) => {
    if (isLocked) {
      message.error(`Too many attempts. Please wait ${countdown}s.`);
      return;
    }

    const { username, password, captcha } = values;

    // Verify Captcha
    if (captcha.toUpperCase() !== captchaCode.toUpperCase()) {
      const currentErrors =
        parseInt(localStorage.getItem("captcha_error_count") || "0") + 1;
      localStorage.setItem("captcha_error_count", currentErrors.toString());

      if (currentErrors >= 5) {
        const lockUntil = Date.now() + 60 * 1000;
        localStorage.setItem("login_lockout_time", lockUntil.toString());
        setIsLocked(true);
        setLockoutTime(lockUntil);
        setCountdown(60);
        message.error(
          "Verification code error limit reached. Disabled for 1 minute."
        );
      } else {
        message.error(`Verification code incorrect. (${currentErrors}/5)`);
        generateCaptcha();
      }
      return;
    }

    setLoading(true);
    // Mock Login
    setTimeout(() => {
      setLoading(false);
      if (username === "admin" && password === "123456") {
        localStorage.removeItem("captcha_error_count");
        message.success("Login successful!");
        navigate("/back/dashboard"); // Example route
      } else {
        message.error("Invalid username or password (try admin/123456)");
        generateCaptcha();
      }
    }, 1000);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <SvgBackground />
      <Card className="w-full max-w-lg shadow-xl rounded-xl border-t-4 backdrop-blur-sm bg-white/90">
        <div className="text-center mb-8">
          <Title level={3} style={{ color: "var(--color-primary)", margin: 0 }}>
            Tarzan的博客后台
          </Title>
        </div>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={
                <UserOutlined className="text-(--color-primary) opacity-70" />
              }
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            style={{ marginBottom: 0 }}
          >
            <Input.Password
              prefix={
                <LockOutlined className="text-(--color-primary) opacity-70" />
              }
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            label="Verification Code"
            required
            style={{ marginBottom: 0 }}
          >
            <div className="flex items-start gap-2">
              <Form.Item
                name="captcha"
                rules={[{ required: true, message: "Required!" }]}
                noStyle
              >
                <Input
                  prefix={
                    <SafetyCertificateOutlined className="text-(--color-primary) opacity-70" />
                  }
                  placeholder="Code"
                  disabled={isLocked}
                  className="flex-1"
                />
              </Form.Item>
              <div
                className="h-[40px] w-[100px] cursor-pointer bg-gray-100 rounded overflow-hidden border border-gray-200"
                onClick={generateCaptcha}
              >
                <canvas
                  ref={canvasRef}
                  width="100"
                  height="40"
                  className="w-full h-full"
                />
              </div>
            </div>
            {isLocked && (
              <div className="text-red-500 text-xs mt-1">
                Try again in {countdown}s
              </div>
            )}
          </Form.Item>

          <Form.Item className="mb-0" style={{ marginTop: "30px" }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              disabled={isLocked}
              style={{
                backgroundColor: "var(--color-primary)",
                borderColor: "var(--color-primary)",
              }}
            >
              {isLocked ? `Locked (${countdown}s)` : "Login"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
