import Navbar from "../components/Navbar";

const ArsitTecnologiaSuccessCasePage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
                <h1 className="text-3xl font-bold text-blue-900 mb-6">Case de Sucesso: Apoio Governamental com a ARSIT TECNOLOGIA</h1>

                <p className="text-gray-700 mb-4">
                    A <strong>ARSIT TECNOLOGIA</strong> tem apoiado seus clientes governamentais em todo o Brasil quando necessitam de cotação e pesquisa de preços para os principais fabricantes de tecnologia mundial. Temos oferecido aos nossos clientes o que há de melhor e mais moderno na área de tecnologia e telecom.
                </p>

                <p className="text-gray-700 mb-4">
                    Somos parceiros dos fabricantes <strong>Microsoft, Redhat, ESET Antivirus, Dell, IBM, HP, Cisco, Kaspersky</strong>, entre tantos outros. Com isso, nossos clientes governamentais têm crescido muito, e já temos diversos cases de sucesso nesse segmento.
                </p>

                <p className="text-gray-700 mb-4">
                    Seja na venda de computadores, notebooks, desktops, servidores, roteadores, switches e outros equipamentos, também contamos com uma divisão especializada na venda de softwares.
                </p>

                <p className="text-gray-700 mb-4">
                    A <strong>ARSIT TECNOLOGIA</strong> vem ajudando seus clientes com serviços de manutenção, suporte técnico especializado, administração de TI e Telecom, acumulando mais de 12 anos de experiência na área.
                </p>

                <p className="text-gray-700 mb-4">
                    Atualmente, temos clientes com mais de 2 mil equipamentos sob nossos cuidados. Oferecemos total garantia dos serviços e contamos com uma apólice de seguro, proporcionando segurança e tranquilidade na hora de manusearmos seus equipamentos.
                </p>

                <p className="text-gray-700 mb-6">
                    Entre em contato com nosso departamento de licitações para mais informações pelo e-mail: <strong>licitacao@arsit.com.br</strong> ou pelo telefone.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://www.arsit.com.br/images/atestado-uberaba.png" alt="Atestado Técnico Uberaba" className="w-full h-auto" />
                        <p className="text-center text-gray-600 text-sm mt-2">Atestado Técnico - Uberaba</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://www.arsit.com.br/images/atestado-tribunal02.png" alt="Atestado Técnico Tribunal" className="w-full h-auto" />
                        <p className="text-center text-gray-600 text-sm mt-2">Atestado Técnico - Tribunal</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArsitTecnologiaSuccessCasePage;
