import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        segment: '',
        companySize: '',
        department: '',
        position: '',
        help: '',
        consent: false
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        if (submitStatus !== 'idle') setSubmitStatus('idle');
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const serviceId = 'service_yrfxsg7';
            const templateId = 'template_e1nk47n';
            const publicKey = 'COfady7bphtUFGdT5';
            
            // Parâmetros ajustados para o seu template
            const templateParams = {
                title: `Nova solicitação comercial - ${formData.name}`,
                name: formData.name,
                message: `
Informações do contato:
━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nome: ${formData.name}
📧 Email: ${formData.email}
📱 Telefone: ${formData.phone || 'Não informado'}
🏢 Empresa: ${formData.company || 'Não informado'}
🎯 Segmento: ${formData.segment}
📊 Porte da empresa: ${formData.companySize}
🏛️ Departamento: ${formData.department}
💼 Cargo: ${formData.position || 'Não informado'}

💬 Como podemos ajudar:
${formData.help}

━━━━━━━━━━━━━━━━━━━━━━━━
📨 Enviado pelo formulário do site da Arsit
                `.trim()
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            setSubmitStatus('success');
            setFormData({
                name: '', phone: '', email: '', company: '', segment: '',
                companySize: '', department: '', position: '', help: '', consent: false
            });
            
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    ✅ Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.
                </div>
            )}
            
            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
                </div>
            )}

            <form id="contato" onSubmit={handleSubmit} className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Conte para nós como podemos te ajudar</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Linha 1 */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Nome*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                            placeholder="Seu nome completo"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Telefone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                            placeholder="+55 (00) 00000-0000"
                        />
                    </div>

                    {/* Linha 2 */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                            placeholder="seuemail@exemplo.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Empresa</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                            placeholder="Nome da empresa"
                        />
                    </div>

                    {/* Linha 3 */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Segmento*</label>
                        <select
                            name="segment"
                            value={formData.segment}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                        >
                            <option value="">Selecione um segmento</option>
                            <option value="Tecnologia">Tecnologia</option>
                            <option value="Varejo">Varejo</option>
                            <option value="Indústria">Indústria</option>
                            <option value="Serviços">Serviços</option>
                            <option value="Governo">Governo</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Porte da empresa*</label>
                        <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                        >
                            <option value="">Selecione o porte</option>
                            <option value="Pequena (até 50 funcionários)">Pequena (até 50 funcionários)</option>
                            <option value="Média (51-250 funcionários)">Média (51-250 funcionários)</option>
                            <option value="Grande (250+ funcionários)">Grande (250+ funcionários)</option>
                        </select>
                    </div>

                    {/* Linha 4 */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Departamento*</label>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                        >
                            <option value="">Selecione um departamento</option>
                            <option value="TI">TI</option>
                            <option value="RH">RH</option>
                            <option value="Financeiro">Financeiro</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Operações">Operações</option>
                            <option value="Diretoria">Diretoria</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Cargo</label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                            placeholder="Seu cargo"
                        />
                    </div>
                </div>

                {/* Área de ajuda */}
                <div className="mt-6 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Como podemos ajudar?*</label>
                    <textarea
                        name="help"
                        value={formData.help}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full p-2 border rounded-md h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                        placeholder="Descreva sua necessidade"
                    />
                </div>

                {/* Checkbox de consentimento */}
                <div className="mt-6 flex items-center">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-600">
                        Concordo em permitir que a ARSIT armazene e processe meus dados pessoais conforme descrito na Política de Privacidade.
                    </label>
                </div>

                {/* Botão de enviar */}
                <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>

                {/* Texto de disclaimer */}
                <p className="mt-4 text-xs text-gray-500">
                    Ao enviar este formulário, você concorda com a utilização dos dados informados para contato comercial via e-mail ou telefone. Você pode cancelar o recebimento dessas comunicações quando desejar, clicando no link "Cancelar assinatura" ou "Descadastrar", disponíveis em todas as comunicações da ARSIT. Para mais informações, consulte nossa Política de Privacidade.
                </p>
            </form>
        </>
    );
}