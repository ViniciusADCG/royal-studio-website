'use client';
import { useState } from 'react';

export default function LeadCapture() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [status, setStatus] = useState<'ocioso' | 'enviando' | 'sucesso'>('ocioso');

  // ATENÇÃO: Cole a sua URL do Apps Script aqui
  const scriptURL = "https://script.google.com/macros/s/AKfycbw4OQeP3RhxjwrzukE8YDOWk64NztXTVuSVrfHvxDVCnSMtwr5T7Mf48URznX8T5nin/exec"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando');

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, telefone }),
      });
      
      setStatus('sucesso');
      setNome('');
      setTelefone('');
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
      setStatus('ocioso');
    }
  };

  return (
    <section className="bg-white/70 backdrop-blur-md border border-white/50">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
        
        {/* Texto da Promoção */}
        <div className="md:w-1/2 p-8 md:p-12 bg-dourado-50 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Ganhe 10% de desconto no seu primeiro agendamento!
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Deixe seu contato para receber o seu cupom exclusivo e ficar por dentro das nossas novidades. Nós entraremos em contato para agendar o seu melhor horário.
          </p>
        </div>

        {/* Formulário de Captura */}
        <div className="md:w-1/2 p-8 md:p-12">
          {status === 'sucesso' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Tudo certo!</h3>
              <p className="text-gray-600">Em breve nossa equipe chamará você no WhatsApp para garantir o seu desconto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Seu Nome</label>
                <input
                  type="text"
                  id="nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-dourado-500 focus:border-dourado-500 transition-colors"
                  placeholder="Ex: Maria Silva"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Seu WhatsApp</label>
                <input
                  type="tel"
                  id="telefone"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg border border-dourado-50 focus:ring-dourado-500 focus:border-dourado-500 transition-colors"
                  placeholder="(67) 91234-5678"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'enviando'}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg border border-dourado-50 text-lg font-medium text-white bg-dourado-600 hover:bg-dourado-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dourado-500 transition-colors disabled:bg-dourado-400"
              >
                {status === 'enviando' ? 'Enviando...' : 'Quero meu desconto'}
              </button>
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
}