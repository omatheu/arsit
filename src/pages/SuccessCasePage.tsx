import Navbar from "../components/Navbar";

const SuccessCasePage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
                <h1 className="text-3xl font-bold text-blue-900 mb-6">Case de Sucesso: Parceria Global com a InoVo Services</h1>

                <p className="text-gray-700 mb-4">
                    Em 2015, a <strong>InoVo Services</strong>, empresa com sede nos Estados Unidos e atuação global, buscava um parceiro no Brasil para atender seus projetos de TI e clientes de grande porte no país.
                </p>

                <p className="text-gray-700 mb-4">
                    Nosso primeiro desafio foi a alocação de um Gerente de TI para a <strong>Symantec</strong>, na cidade de São Paulo, uma renomada fabricante de soluções de segurança digital e antivírus.
                </p>

                <p className="text-gray-700 mb-4">
                    Logo em seguida, fomos solicitados a fornecer profissionais de suporte técnico nível pleno para a <strong>SAP</strong> no Rio de Janeiro. A <strong>SAP SE</strong>, de origem alemã, é referência global em softwares de gestão empresarial.
                </p>

                <p className="text-gray-700 mb-4">
                    Ao longo dos anos, expandimos nossa parceria com a InoVo Services, atendendo clientes como <strong>IBM, Siemens, Veritas e BP Petróleo</strong>, entre outros, em diversas regiões do Brasil.
                </p>

                <p className="text-gray-700 mb-4">
                    Recentemente, destacamo-nos no projeto de análise de redes Wireless para a <strong>BP Petróleo</strong>, com atuação em aeroportos estratégicos: Santos Dumont, Galeão (RJ), Cumbica/Guarulhos, Viracopos (SP), além de Brasília e Recife.
                </p>

                <p className="text-gray-700 mb-6">
                    Desde 2002 no Brasil, a <strong>BP Petróleo</strong> distribui combustíveis de aviação em 28 localidades, atendendo desde pequenos jatos a grandes aeronaves comerciais.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">Atestados Técnicos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <img src="https://www.arsit.com.br/images/atestado.png" alt="Atestado Técnico 1" className="rounded-lg w-full h-48 object-cover" />
                            <p className="text-center text-gray-600 mt-2">Atestado Técnico 1</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <img src="https://www.arsit.com.br/images/atestado2.png" alt="Atestado Técnico 2" className="rounded-lg w-full h-48 object-cover" />
                            <p className="text-center text-gray-600 mt-2">Atestado Técnico 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuccessCasePage;
