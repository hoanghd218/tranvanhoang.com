import { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Trang không tìm thấy | Hoàng",
  description: "Trang bạn đang tìm kiếm không tồn tại.",
  robots: "noindex",
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-coral mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Trang không tìm thấy</h2>
        <p className="text-muted-foreground mb-8">
          Trang bạn đang tìm kiếm có thể đã bị xóa hoặc không tồn tại.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Trang chủ</span>
          </Link>
          <Link
            href="javascript:history.back()"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
