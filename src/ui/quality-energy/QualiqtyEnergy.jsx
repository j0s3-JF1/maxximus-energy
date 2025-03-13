import './QualityEnergy.css';

import React, { useRef, useState } from 'react';
import Header from '../../components/header/Header';
import InputForm from '../../components/inputForms/InputForm';
import Carousel from '../../components/carousel/Carousel';
import BoxShort from '../../components/box/boxShort/BoxShort';
import {
    ArrowBigUp,
    BarChart,
    ChartNetwork,
    Check,
    Clock,
    DollarSign,
    FileText,
    Gavel,
    Landmark,
    LineChart,
    Monitor,
    Phone,
    Plug,
    Power,
    Settings,
    ShieldUser,
    Signal,
    StopCircle,
    TrendingUp,
    Users,
    Waves,
    Wrench,
    Zap
} from 'lucide-react';
import emailjs from 'emailjs-com';
import env from '../../config/Env.js';

//Componentes
import Itens from '../../components/box/laudo/Itens';
import BoxLarger from '../../components/box/boxLarger/BoxLarger';
import Rodape from '../../components/rodape/Rodape';
import BoxImage from '../../components/box/boxImage/BoxImage';

//imagens
import bomba from '../../assets/bombaCentrifuga.jpg';
import motor from '../../assets/motorAC.png';
import painel from '../../assets/painelEletrico.jpg';
import inversor from '../../assets/inversor.png';
import chiller from '../../assets/chiller.png';
import compressorChiller from '../../assets/compressorChiller.png';
import gerador from '../../assets/gerador.png';
import transformador from '../../assets/transformador.png';
import redutor from '../../assets/redutor.png';
import compressorAr from '../../assets/compressorAr.png'

import relampago from '../../assets/relampago.jpg';
import painelEletrico from '../../assets/painel.jpg';
import nr12 from '../../assets/nr12.png';
import condominio from '../../assets/condominio.jpg';
import carregadorCarroEletrico from '../../assets/carregadorCarroEletrico.jpg';
import VoltarTopo from '../../components/voltarTopo/VoltarTopo.jsx';

function QualityEnergy() {

    const etapasData = [
        {
            Icon: Phone,
            titulo: "Fale com a MAXXIMUS",
            conteudo: "Nossa equipe analisará suas necessidades e agendará uma visita técnica para avaliar a rede elétrica da sua empresa.",
        },
        {
            Icon: Wrench,
            titulo: "Instalação do analisador",
            conteudo: "Nossa equipe técnica realizará a instalação do equipamento para monitorar a qualidade da energia em sua rede elétrica.",
        },
        {
            Icon: LineChart,
            titulo: "Monitoramento e coleta de dados",
            conteudo: "Durante o período de medição, coletamos informações detalhadas para avaliar a eficiência da rede elétrica da sua empresa.",
        },
        {
            Icon: FileText,
            titulo: "Relatório completo e diagnóstico",
            conteudo: "Em até 5 dias úteis, você receberá um relatório detalhado com a análise da sua rede e recomendações para otimização do consumo energético.",
        },
    ];

    const escopoData = [
        {
            Icon: ChartNetwork,
            titulo: "Detecção de Harmônicas",
            conteudo: "Identificamos distorções na rede elétrica que podem causar sobrecarga, aquecimento excessivo e danos aos equipamentos.",
        },
        {
            Icon: Power,
            titulo: "Análise de Quedas de Energia",
            conteudo: "Avaliamos as causas das quedas de energia para mitigar falhas e garantir maior estabilidade no fornecimento elétrico.",
        },
        {
            Icon: Plug,
            titulo: "Verificação da Capacidade da Rede",
            conteudo: "Analisamos se a infraestrutura elétrica suporta a instalação de novos equipamentos sem comprometer o desempenho.",
        },
        {
            Icon: TrendingUp,
            titulo: "Estudo do Fator de Potência",
            conteudo: "Verificamos o fator de potência da rede e recomendamos soluções para corrigir ineficiências no consumo de energia.",
        },
        {
            Icon: Zap,
            titulo: "Monitoramento de Sobrecarga e Consumo",
            conteudo: "Identificamos circuitos ou equipamentos que possam estar consumindo energia além do necessário, evitando sobrecargas na rede.",
        },
    ];

    const eficienciaData = [
        {
            imagem: condominio,
            titulo: "Liberação de Ar Condicionados em Condomínios",
            conteudo: "",
        },
        {
            imagem: carregadorCarroEletrico,
            titulo: "Liberação de Carregadores de Carros elétricos em Condomínios",
            conteudo: "",
        },
        {
            imagem: relampago,
            titulo: "Especialista em Laudo Técnico de SPDA (Para-Raios)",
            conteudo: "",
        },
        {
            imagem: painelEletrico,
            titulo: "Prontuário das Instalações Elétricas – PIE – conforme NR10",
            conteudo: "",
        },
        {
            imagem: nr12,
            titulo: "Laudo NR12 para Máquinas e Equipamentos",
            conteudo: "",
        },
    ];

    const itensLaudoData = [
        {
            titulo: "Diagnóstico completo de problemas elétricos"
        },
        {
            titulo: "Recomendações de correção e ações imediatas"
        },
        {
            titulo: "Análise de eficiência energética"
        },
        {
            titulo: "Capacidade de suporte a novos equipamentos"
        },
        {
            titulo: "Prevenção de paradas inesperadas"
        },
        {
            titulo: "Conformidade com normas e regulamentações"
        },
        {
            titulo: "Relatório técnico completo com ART"
        },
        {
            titulo: "Plano de ação personalizado"
        },
        {
            titulo: "Análise de impacto financeiro"
        },
        {
            titulo: "Suporte técnico e acompanhamento"
        },
    ];

    const credibilidadeData = [
        {
            Icon: Gavel,
            titulo: "Perícia Judicial",
            conteudo: "Nossos analisadores são os únicos reconhecidos para uso em processos judiciais de perícia técnica.",
        },
        {
            Icon: Landmark,
            titulo: "ANEEL",
            conteudo: "Somos a única solução validada para mediações entre consumidores e concessionárias junto à ANEEL.",
        },
        {
            Icon: Waves,
            titulo: "IEC 61000-4-30",
            conteudo: "Adotamos a metodologia da norma IEC 61000-4-30 para medição precisa de oscilações e harmônicas.",
        },
        {
            Icon: FileText,
            titulo: "EN50160",
            conteudo: "Garantimos avaliações de qualidade de energia seguindo rigorosamente a norma EN50160.",
        },
        {
            Icon: TrendingUp,
            titulo: "Amostragem RMS",
            conteudo: "Realizamos amostragem RMS de 5000 pontos em 10/12^1 ciclos, conforme os padrões IEC61000.",
        },
        {
            Icon: Monitor,
            titulo: "Tecnologia Avançada",
            conteudo: "Acompanhe parâmetros, eventos, tendências, harmônicas e muito mais com nossa tecnologia inovadora.",
        },
    ];

    const servicosData = [
        {
            titulo: "Bombas centrífugas KSB",
            imagem: bomba
        },
        {
            titulo: "Motores elétricos AC e DC",
            imagem: motor
        },
        {
            titulo: "Inversores de frequência",
            imagem: inversor
        },
        {
            titulo: "Chillers e fancoils",
            imagem: chiller
        },
        {
            titulo: "Compressores para Chillers",
            imagem: compressorChiller
        },
        {
            titulo: "Compressores de ar comprimido",
            imagem: compressorAr
        },
        {
            titulo: "Geradores a diesel",
            imagem: gerador
        },
        {
            titulo: "Transformadores de média e baixa tensão",
            imagem: transformador
        },
        {
            titulo: "Painéis elétricos",
            imagem: painel
        },
        {
            titulo: "Redutores de velocidade",
            imagem: redutor
        },
    ];

    const mudancaData = [
        {
            Icon: DollarSign,
            titulo: "Menos Custos com Manutenção e Paradas",
            conteudo: "Reduza gastos com manutenções inesperadas e evite paradas que prejudicam sua produtividade.",
        },
        {
            Icon: ShieldUser,
            titulo: "Proteção dos Equipamentos",
            conteudo: "Identifique falhas elétricas precocemente e prolongue a vida útil dos seus equipamentos.",
        },
        {
            Icon: Wrench,
            titulo: "Maior Eficiência Operacional",
            conteudo: "Melhore o uso da energia elétrica, evitando desperdícios e aumentando o desempenho da sua operação.",
        },
        {
            Icon: Clock,
            titulo: "Evite Falhas Graves",
            conteudo: "Detecte problemas antes que causem grandes prejuízos e mantenha suas operações contínuas.",
        },
        {
            Icon: Users,
            titulo: "Atenda às Normas Regulamentadoras",
            conteudo: "Garanta conformidade com normas de segurança, evitando sanções e garantindo operações seguras.",
        },
        {
            Icon: Settings,
            titulo: "Soluções Sob Medida",
            conteudo: "Obtenha um serviço personalizado, adaptado às necessidades específicas da sua empresa.",
        },
    ];

    const divideArray = ({ lista }) => {
        const metade = Math.ceil(lista.length / 2);
        const primeiraMetade = lista.slice(0, metade);
        const segundaMetade = lista.slice(metade);

        return [primeiraMetade, segundaMetade];
    }

    const [primeiraMetadeLaudo, segundaMetadeLaudo] = divideArray({ lista: itensLaudoData });
    const [primeiraMetadeEscopo, segundaMetadeEscopo] = divideArray({ lista: escopoData });
    const [primeiraMetadeCredi, segundaMetadeCredi] = divideArray({ lista: credibilidadeData });
    const [primeiraMetadeServico, segundaMetadeServico] = divideArray({ lista: servicosData });
    const [primeiraMetadeMudanca, segundaMetadeMudanca] = divideArray({ lista: mudancaData });
    const [primeiraMetadeEficiencia, segundaMetadeEficiencia] = divideArray({ lista: eficienciaData });

    //Email
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });

    const form = useRef();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function sendEmail(e) {
        if (formData.nome == "" || formData.email == "" || formData.telefone == "") {
            alert("Preencha todos os campos obrigatórios!");
            return;
        } else {
            e.preventDefault();

            emailjs
                .sendForm(
                    env.serviceId,
                    env.templateId,
                    form.current,
                    env.publicKey
                )
                .then(() => {
                    alert("Email Enviado com Sucesso!");
                    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
                }, (error) => {
                    alert("Erro ao enviar email! Consulte os Logs");
                }
                );
        }
    }

    //WhatsApp
    const mensagem = "Olá! Gostaria de mais informações."; // Mensagem pré-definida

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${env.whatsAppNumber}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    };
    return (
        <>
            <Header />
            <div id='banner-principal' className='divBanner'>
                <div className='bannerMessage'>
                    <h1>
                        Proteja seus equipamentos com a realização de adequações conforme norma e com responsabilidade sustentável. 
                        Melhore a confiabilidade e evite interrupções com nossas soluções e <strong>Análise de Qualidade de Energia</strong>
                    </h1>
                    <h3>
                        Detecte e resolva falhas elétricas que podem gerar paradas inesperadas e prejuízos.
                        Nossa análise assegura mais eficiência, segurança e durabilidade para seus equipamentos,
                        reduzindo custos desnecessários.
                    </h3>
                    <div className='bannerMetricas'>
                        <div className='metricasAnos'>
                            <h1>+ 25</h1>
                            <label>ANOS DE EXPERTISE</label>
                        </div>
                        <div className='metricasAnos'>
                            <h1>+ 5mil</h1>
                            <label>TRABALHOS REALIZADOS</label>
                        </div>
                        <div className='metricasAnos'>
                            <h1>1250</h1>
                            <label>CLIENTES ATENDIDOS</label>
                        </div>
                        <div className='metricasAnos'>
                            <h1>20</h1>
                            <label>ESTADOS DO BRASIL</label>
                        </div>
                    </div>
                </div>
                <div className='bannerForms'>
                    <form ref={form} onSubmit={sendEmail}>
                        <InputForm
                            titulo={"Nome *"}
                            placeholder={"Nome Completo"}
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                        <InputForm
                            titulo={"Email *"}
                            placeholder={"exemplo@email.com"}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <InputForm
                            titulo={"Telefone *"}
                            placeholder={"(11) 912345-6789"}
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                        />
                        <InputForm
                            titulo={"Mensagem"}
                            placeholder={"Mensagem"}
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                        />
                        <br />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <div className='center'>
                <Carousel />
            </div>
            <div id="sobre-analise" className='divAnalise'>
                <h1>Análise Energética Completa em 4 Etapas</h1>
                <hr />
                <text>
                    Aplicamos um processo ágil e eficiente para detectar falhas e identificar melhorias na performance elétrica da sua empresa desde o primeiro contato.
                    Em apenas 4 etapas, entregamos uma solução sob medida para otimizar a eficiência e garantir a proteção dos seus equipamentos.
                </text>
                <div className='divEtapas'>
                    {
                        etapasData.map((data, index) => (
                            <BoxShort
                                key={index}
                                Icon={data.Icon}
                                titulo={data.titulo}
                                conteudo={data.conteudo}
                            />
                        ))
                    }
                </div>
                <text>
                    Fale com nossa equipe e descubra como podemos ajudar sua empresa a melhorar a eficiência elétrica e reduzir custos.
                </text>
                <text>
                    <strong>Entre em contato agora e agende uma análise personalizada.</strong>
                </text>
                <div>
                    <button className='button' onClick={() => handleWhatsAppClick()}>Entrar em Contato</button>
                </div>
            </div>
            <div id="eficiencia-energetica" className='divEficiencia'>
                <h1>Maximizando a Eficiência Energética: Soluções Sustentáveis para o Futuro</h1>
                <hr />
                <label>
                    A eficiência energética visa reduzir o consumo e os custos de energia, promovendo práticas sustentáveis e inovadoras.
                    Ao adotar tecnologias inteligentes e energias renováveis, é possível otimizar recursos,
                    diminuir desperdícios e contribuir para um futuro mais sustentável.
                </label>
                {
                    eficienciaData.length > 5 ? (
                        <>
                            <div>
                                {
                                    primeiraMetadeEficiencia.map((data, index) => (
                                        <BoxImage
                                            key={index}
                                            imagem={data.imagem}
                                            titulo={data.titulo}
                                        />
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    segundaMetadeEficiencia.map((data, index) => (
                                        <BoxImage
                                            key={index}
                                            imagem={data.imagem}
                                            titulo={data.titulo}
                                        />
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <div>
                            {
                                eficienciaData.map((data, index) => (
                                    <BoxImage
                                        key={index}
                                        imagem={data.imagem}
                                        titulo={data.titulo}
                                    />
                                ))
                            }
                        </div>
                    )
                }
                <text>
                    <strong>
                        Fale com nossa equipe e descubra como melhorar a eficiência energética da sua empresa e
                        implementação de projetos voltados para sustentabilidade.
                    </strong>
                </text>
                <div>
                    <button className='button' onClick={() => handleWhatsAppClick()}>Entrar em Contato</button>
                </div>
            </div>
            <div id="laudo-eletrico" className='divLaudo'>
                <div className='boxConheca'>
                    <h1>Conheça nosso Laudo Elétrico</h1>
                    <hr />
                    <label>
                        Nosso laudo técnico elétrico oferece uma análise minuciosa da sua rede,
                        detectando falhas críticas e apontando oportunidades de melhoria.
                    </label>
                    <button className='button' onClick={() => handleWhatsAppClick()}>Entrar em Contato</button>
                </div>
                <div className='boxItensLaudo'>
                    <div>
                        {primeiraMetadeLaudo.map((data, index) => (
                            <Itens key={index} titulo={data.titulo} />
                        ))}
                    </div>
                    <div>
                        {segundaMetadeLaudo.map((data, index) => (
                            <Itens key={index} titulo={data.titulo} />
                        ))}
                    </div>
                </div>
            </div>
            <div id="escopo" className='divEscopo'>
                <h1>Serviços oferecidos pela nossa Análise de Qualidade de Energia para sua empresa</h1>
                <hr />
                <label>
                    Nossa análise abrange todos os aspectos da sua rede elétrica, desde a identificação de falhas críticas até a otimização do consumo de energia.
                    Oferecemos uma solução completa para melhorar a eficiência e proteger seus equipamentos contra danos.
                </label>
                {
                    escopoData.length > 5 ? (
                        <>
                            <div>
                                {
                                    primeiraMetadeEscopo.map((data, index) => (
                                        <BoxShort
                                            key={index}
                                            Icon={data.Icon}
                                            titulo={data.titulo}
                                            conteudo={data.conteudo}
                                        />
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    segundaMetadeEscopo.map((data, index) => (
                                        <BoxShort
                                            key={index}
                                            Icon={data.Icon}
                                            titulo={data.titulo}
                                            conteudo={data.conteudo}
                                        />
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <div>
                            {
                                escopoData.map((data, index) => (
                                    <BoxShort
                                        key={index}
                                        Icon={data.Icon}
                                        titulo={data.titulo}
                                        conteudo={data.conteudo}
                                    />
                                ))
                            }
                        </div>
                    )
                }
                <text>
                    <strong>Fale com nossos especialistas e descubra como otimizar sua energia. Solicite uma análise personalizada agora mesmo.</strong>
                </text>
                <div>
                    <button className='button' onClick={() => handleWhatsAppClick()}>Entrar em Contato</button>
                </div>
            </div>
            <div className='divCredibilidade'>
                <h1>Por que optar pela Análise de Energia da MAXXIMUS</h1>
                <hr />
                <label>
                    Empresas de todos os tamanhos podem aproveitar os benefícios da nossa Análise de Energia. Com tecnologia avançada e em conformidade com as normas nacionais,
                    oferecemos a solução ideal para atender às suas necessidades, seja qual for o porte ou segmento. Nosso serviço é preciso, confiável e personalizado para diferentes tipos de negócios.
                </label>
                {
                    credibilidadeData.length > 5 ? (
                        <>
                            <div>
                                {
                                    primeiraMetadeCredi.map((data, index) => (
                                        <BoxLarger
                                            key={index}
                                            Icon={data.Icon}
                                            titulo={data.titulo}
                                            conteudo={data.conteudo}
                                        />
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    segundaMetadeCredi.map((data, index) => (
                                        <BoxLarger
                                            key={index}
                                            Icon={data.Icon}
                                            titulo={data.titulo}
                                            conteudo={data.conteudo}
                                        />
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <div>
                            {
                                escopoData.map((data, index) => (
                                    <BoxLarger
                                        key={index}
                                        Icon={data.Icon}
                                        titulo={data.titulo}
                                        conteudo={data.conteudo}
                                    />
                                ))
                            }
                        </div>
                    )
                }
                <text>
                    <strong>
                        Entre em contato agora mesmo e descubra como podemos aumentar a eficiência e segurança da sua rede elétrica.
                        Nossos especialistas estão prontos para ajudar!
                    </strong>
                </text>
                <div>
                    <button className='button' onClick={() => handleWhatsAppClick()}>Entrar em Contato</button>
                </div>
            </div>
            <div id="servicos" className='divServicos'>
                <h1>Serviços Especializados em Equipamentos Industriais</h1>
                <label>Realizamos serviços de manutenção preditiva, preventiva e corretiva com reparos especializados para os seguintes equipamentos:</label>
                {
                    servicosData.length <= 5 ? (
                        <>
                            {
                                servicosData.map((data, index) => (
                                    <BoxImage
                                        key={index}
                                        imagem={data.imagem}
                                        titulo={data.titulo}
                                    />
                                ))
                            }
                        </>
                    ) : (
                        <>
                            <div>
                                {
                                    primeiraMetadeServico.map((data, index) => (
                                        <BoxImage
                                            key={index}
                                            imagem={data.imagem}
                                            titulo={data.titulo}
                                        />
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    segundaMetadeServico.map((data, index) => (
                                        <BoxImage
                                            key={index}
                                            imagem={data.imagem}
                                            titulo={data.titulo}
                                        />
                                    ))
                                }
                            </div>
                        </>
                    )
                }
            </div>
            <div className='divMudanca'>
                <h1>Transforme agora a realidade da sua empresa com nossa Análise Energética</h1>
                <hr />
                <label>
                    Nossa análise melhora diretamente a operação da sua empresa, ajudando a reduzir custos e aumentando a segurança de forma significativa.
                    Com a Análise de Qualidade de Energia da <strong>MAXXIMUS</strong>, você assegura:
                </label>
                {
                    mudancaData.length > 5 ? (
                        <>
                            <div>
                                {
                                    primeiraMetadeMudanca.map((data, index) => (
                                        <BoxLarger
                                            key={index}
                                            Icon={data.Icon}
                                            titulo={data.titulo}
                                            conteudo={data.conteudo}
                                        />
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    segundaMetadeMudanca.map((data, index) => (
                                        <BoxLarger
                                            key={index}
                                            Icon={data.Icon}
                                            titulo={data.titulo}
                                            conteudo={data.conteudo}
                                        />
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <div>
                            {
                                mudancaData.map((data, index) => (
                                    <BoxLarger
                                        key={index}
                                        Icon={data.Icon}
                                        titulo={data.titulo}
                                        conteudo={data.conteudo}
                                    />
                                ))
                            }
                        </div>
                    )
                }
                <text>
                    <strong>
                        Entre em contato agora mesmo e descubra como podemos aumentar a eficiência e segurança da sua rede elétrica.
                        Nossos especialistas estão prontos para ajudar!
                    </strong>
                </text>
                <div>
                    <button className='button' onClick={() => handleWhatsAppClick()}>Entrar em Contato</button>
                </div>
            </div>
            <Rodape />
            <VoltarTopo/>
        </>
    );
}

export default QualityEnergy;