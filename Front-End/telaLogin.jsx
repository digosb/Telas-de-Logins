// src/components/LoginForm.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock } from "lucide-react";

const LoginForm = () => {
  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Bem-vindo de volta</h2>
      <p className="text-sm text-center text-gray-500 mb-4">Entre com sua conta para continuar</p>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input type="email" placeholder="seu@email.com" className="pl-10" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Senha</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input type="password" placeholder="••••••••" className="pl-10" />
        </div>
      </div>

      <Button className="w-full mt-4">Entrar</Button>

      <p className="text-sm text-center text-gray-500">
        Não tem uma conta? <a href="#" className="text-blue-600 hover:underline">Cadastre-se</a>
      </p>
    </form>
  );
};

export default LoginForm;

// src/pages/LoginPage.jsx
import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
