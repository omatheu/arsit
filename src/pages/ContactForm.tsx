import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Reset status when user starts typing again
        if (submitStatus !== 'idle') setSubmitStatus('idle');
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Suas configurações reais do EmailJS
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            
            // Parâmetros ajustados para o seu template
            const templateParams = {
                title: `Novo contato do site - ${formData.name}`,
                name: formData.name,
                message: `
📧 Email: ${formData.email}

💬 Mensagem:
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━
📨 Enviado pelo formulário de contato do site da Arsit
                `.trim()
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Limpar formulário
            
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        Entre em Contato
                    </h1>
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                            ✅ Mensagem enviada com sucesso! Retornaremos em breve.
                        </div>
                    )}
                    
                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                            ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                                disabled={isSubmitting}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-gray-600">
                        <p>Ou entre em contato diretamente pelo e-mail: contato@arsit.com.br</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;