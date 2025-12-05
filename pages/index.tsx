import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
  Target,
  AlertTriangle,
  CheckCircle,
  Brain,
  BarChart3,
  Award,
  MapPin,
  Clock,
  Shield,
  Zap,
  LineChart,
  PieChart,
  Activity,
  Flag,
  Crown,
  Crosshair,
  ArrowRight,
  Building,
  Scale,
  Star
} from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // SLIDE 1 - CAPA
    {
      id: 'cover',
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center px-12 bg-gradient-to-br from-white via-gray-50 to-orange-50">
          <div className="mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-black mb-4 tracking-tight">MARCONI PERILLO</h1>
          <h2 className="text-4xl font-light text-gray-600 mb-2">2026</h2>
          <div className="w-32 h-1 bg-orange-500 my-8"></div>
          <h3 className="text-3xl font-semibold text-black mb-4">A RECONQUISTA DE GOIAS</h3>
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            Experiencia Testada vs. Heranca Oligarquica
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-500 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Brain className="w-4 h-4 text-orange-500" />
              <span>Inteligencia Artificial</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Activity className="w-4 h-4 text-orange-500" />
              <span>Analise de Dados</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Target className="w-4 h-4 text-orange-500" />
              <span>Estrategia Eleitoral</span>
            </div>
          </div>
          <div className="mt-16 text-sm text-gray-400">
            <p className="font-semibold text-black">CUBE INTELIGENCIA POLITICA</p>
            <p>Analise Estrategica | Dezembro 2025</p>
          </div>
        </div>
      )
    },

    // SLIDE 2 - A PERGUNTA QUE IMPORTA
    {
      id: 'question',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">A Pergunta Que Importa</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8"></div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-gradient-to-r from-black to-gray-800 text-white p-10 rounded-2xl mb-10 shadow-xl">
              <p className="text-3xl font-light text-center">
                E possivel vencer Daniel Vilela em 2026?
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-xl mb-10">
              <p className="text-xl text-gray-700 italic">
                "A historia politica mostra que retornos sao possiveis quando executados com ESTRATEGIA PRECISA."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Caso Lula</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">—</span>
                    <span>Perdeu 3 eleicoes (1989, 1994, 1998)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">—</span>
                    <span>Foi preso em 2018</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">—</span>
                    <span>Voltou e venceu em 2022</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Caso Marconi</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">—</span>
                    <span>Maior virada da historia goiana (1998)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">—</span>
                    <span>Venceu Iris Rezende 4 vezes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">—</span>
                    <span>O politico que derrota gigantes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 3 - RADIOGRAFIA DA DISPUTA
    {
      id: 'radiography',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">Radiografia da Disputa</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8"></div>

          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-orange-500" />
                  Intencao de Voto (Set-Dez 2025)
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Daniel Vilela</span>
                      <span className="font-bold">26% - 43%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gray-600 h-4 rounded-full" style={{width: '43%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-orange-600">Marconi Perillo</span>
                      <span className="font-bold text-orange-600">15% - 29%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-orange-500 h-4 rounded-full" style={{width: '29%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Wilder Morais</span>
                      <span className="font-bold">5% - 14%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gray-400 h-4 rounded-full" style={{width: '14%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Adriana Accorsi</span>
                      <span className="font-bold">~12%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-red-400 h-4 rounded-full" style={{width: '12%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Indice de Rejeicao
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-orange-600">Marconi Perillo</span>
                      <span className="font-bold text-red-500">38,7% - 51%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-red-500 h-4 rounded-full" style={{width: '51%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Daniel Vilela</span>
                      <span className="font-bold text-green-500">8,5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-green-500 h-4 rounded-full" style={{width: '8.5%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-orange-500" />
                  O Fator Caiado
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span>Aprovacao</span>
                    <span className="text-3xl font-bold text-orange-400">88%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span>Rejeicao</span>
                    <span className="text-3xl font-bold text-green-400">1,7%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span>"Merece eleger sucessor"</span>
                    <span className="text-3xl font-bold text-orange-400">73%</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-bold text-black">Analise</h3>
                </div>
                <p className="text-gray-700">
                  Cenario desafiador, mas NAO impossivel. A diferenca entre os candidatos
                  e RECUPERAVEL em 6-8 meses de campanha estrategica bem executada.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 4 - DINASTIAS DO PODER
    {
      id: 'dynasties',
      content: (
        <div className="h-full flex flex-col p-12 bg-gradient-to-br from-gray-900 to-black text-white">
          <h2 className="text-4xl font-bold mb-2">As Dinastias do Poder Goiano</h2>
          <p className="text-orange-400 text-lg mb-8">Quem controla Goias ha 150 anos?</p>

          <div className="flex-1 grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-6 text-orange-400">Linha do Tempo do Poder</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-500/30"></div>
                  <div className="space-y-4 pl-12">
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-orange-500 rounded-full"></div>
                      <p className="text-sm text-gray-400">1870s</p>
                      <p className="font-medium">Familia CAIADO chega ao poder</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-orange-500 rounded-full"></div>
                      <p className="text-sm text-gray-400">1912-1930</p>
                      <p className="font-medium">"Era Toto Caiado" - Oligarquia dominante</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-gray-500 rounded-full"></div>
                      <p className="text-sm text-gray-400">1930-1945</p>
                      <p className="font-medium text-gray-500">Ostracismo (Era Vargas)</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-orange-500 rounded-full"></div>
                      <p className="text-sm text-gray-400">1950-1990</p>
                      <p className="font-medium">Alternancia com IRIS REZENDE (MDB)</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-400">1999-2018</p>
                      <p className="font-medium text-green-400">ERA MARCONI - Quebrando oligarquias</p>
                      <p className="text-sm text-gray-400">Venceu Iris 4 vezes</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-red-500 rounded-full"></div>
                      <p className="text-sm text-gray-400">2019-2026</p>
                      <p className="font-medium text-red-400">RETORNO DOS CAIADO + VILELA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <Building className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold mb-3">Familia Caiado</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>6 Senadores</li>
                  <li>4 Deputados Federais</li>
                  <li>2 Governadores</li>
                  <li>Poder desde 1870</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <Users className="w-8 h-8 text-orange-500 mb-4" />
                <h4 className="font-bold mb-3">Familia Vilela</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>Maguito Vilela (Gov)</li>
                  <li>Daniel Vilela (Vice-Gov)</li>
                  <li>Leandro Vilela (Prefeito)</li>
                  <li>Aliados do MDB</li>
                </ul>
              </div>

              <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl p-6">
                <p className="text-sm font-medium text-orange-300">
                  2026 e sobre perpetuar ou romper 150 anos de dominio das mesmas familias
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 5 - ALIANCA CAIADO-VILELA
    {
      id: 'alliance',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">A Fusao das Duas Oligarquias</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8"></div>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-1 bg-gray-900 text-white rounded-xl p-6">
                  <Crown className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Familia Caiado</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-500" />
                      <span>Antonio Jose (sec. XIX)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-500" />
                      <span>Toto Caiado (1912-1930)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-500" />
                      <span>Emival/Leonino</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-400 font-bold">
                      <ArrowRight className="w-4 h-4" />
                      <span>RONALDO CAIADO (atual)</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-gray-100 rounded-xl p-6">
                  <Users className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-4">Familia Vilela</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-500" />
                      <span>Maguito Vilela (Gov 95-98)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-500" />
                      <span>Vice-pres. nacional MDB</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-600 font-bold">
                      <ArrowRight className="w-4 h-4" />
                      <span>DANIEL VILELA (Vice-Gov)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-orange-500" />
                      <span>Leandro Vilela (Prefeito)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500 text-white rounded-xl p-6 text-center">
                <p className="text-lg font-bold">ALIANCA 2018</p>
                <p className="text-3xl font-bold my-2">Caiado + Maguito</p>
                <p className="text-sm opacity-80">Vitoria no 1o turno com 59%</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-4">Historico de Aliancas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                    <div className="w-16 text-sm font-bold text-orange-500">2018</div>
                    <div>Caiado + Maguito = 59% (1o turno)</div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                    <div className="w-16 text-sm font-bold text-orange-500">2022</div>
                    <div>Caiado + Daniel = Reeleicao 1o turno</div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-orange-100 rounded-lg border-2 border-orange-300">
                    <div className="w-16 text-sm font-bold text-orange-600">2026</div>
                    <div className="font-medium">Daniel herda maquina + apoio Caiado</div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-bold">Narrativa Central</h3>
                </div>
                <p className="text-2xl font-light mb-4">
                  "Daniel nao conquistou nada, <span className="text-orange-400 font-bold">HERDOU</span> tudo"
                </p>
                <p className="text-sm text-gray-400">
                  Posicionar Marconi como quem CONSTRUIU vs quem RECEBEU
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 6 - MARCONI: O OUTSIDER
    {
      id: 'outsider',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">Marconi: O Outsider Que Venceu Gigantes</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8"></div>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 mb-6">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Derrotou Iris Rezende 4 Vezes</h3>
                <p className="text-orange-100 mb-6">
                  "O goiano dos goianos", icone do MDB, 60 anos de vida publica. Considerado IMBATIVEL.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">1998</div>
                    <div className="text-xs">Maior virada GO</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">2002</div>
                    <div className="text-xs">Reeleito</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">2010</div>
                    <div className="text-xs">Governador</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">2014</div>
                    <div className="text-xs">Reeleito</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Ativos Politicos</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl font-bold text-orange-400">36</div>
                    <div className="text-sm text-gray-400">Anos de carreira</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl font-bold text-orange-400">16</div>
                    <div className="text-sm text-gray-400">Anos governando</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-4">Contraste Direto</h3>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left text-orange-600">MARCONI</th>
                      <th className="p-4 text-left text-gray-500">DANIEL VILELA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4">36 anos de carreira</td>
                      <td className="p-4 text-gray-500">Filho de Maguito</td>
                    </tr>
                    <tr>
                      <td className="p-4">16 anos governando</td>
                      <td className="p-4 text-gray-500">Vice "decorativo"</td>
                    </tr>
                    <tr>
                      <td className="p-4">Senador mais votado</td>
                      <td className="p-4 text-gray-500">Nunca governou sozinho</td>
                    </tr>
                    <tr>
                      <td className="p-4">CONSTRUIU legado</td>
                      <td className="p-4 text-gray-500">HERDOU posicao</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Venceu gigantes</td>
                      <td className="p-4 text-gray-500">Venceu com padrinho</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                <Target className="w-6 h-6 text-orange-500 mb-2" />
                <p className="text-xl font-bold text-black">
                  "Governar exige experiencia, nao sobrenome"
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 7 - VULNERABILIDADES
    {
      id: 'vulnerabilities',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">Pontos de Ataque Identificados</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8"></div>

          <div className="flex-1 grid grid-cols-2 gap-6">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Taxa do Agro (FUNDEINFRA)</h3>
                  <p className="text-sm text-red-600">Arma eleitoral pronta</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-600">Aliquota soja</span>
                  <span className="font-bold">1,65%</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-600">Arrecadado</span>
                  <span className="font-bold text-red-600">R$ 922 milhoes</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span className="text-gray-600">Obras prometidas</span>
                  <span className="font-bold">44</span>
                </div>
                <div className="flex justify-between p-3 bg-red-100 rounded-lg">
                  <span className="text-gray-600">Obras concluidas</span>
                  <span className="font-bold text-red-600">APENAS 1</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                <p className="text-sm font-medium text-orange-800">
                  MARCONI: "Se eleito, NAO VOU RECRIAR a taxa"
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">Crise Policia Civil</h3>
                    <p className="text-xs text-yellow-700">SINPOL-GO x Governo Caiado</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">—</span>
                    <span><strong>Dez/2024:</strong> Caiado RECUOU do acordo apos 2 anos de negociacao</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">—</span>
                    <span><strong>Campanha "Perguntar Nao Ofende":</strong> Outdoors em todo estado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">—</span>
                    <span><strong>Abr/2025:</strong> Ato simbolico com caixao "enterro da PC"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">—</span>
                    <span><strong>Estrategia:</strong> Seguir Caiado por onde for para expor descaso</span>
                  </li>
                </ul>
                <div className="mt-3 p-2 bg-yellow-100 rounded text-xs italic text-yellow-800">
                  "Somos a PC que mais entrega resultados, mas temos os piores salarios DO PROPRIO ESTADO" - SINPOL-GO
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">Uso da Maquina Publica</h3>
                    <p className="text-xs text-purple-700">Caiado CONDENADO por abuso de poder</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">—</span>
                    <span><strong>Fev/2025:</strong> Pesquisa pro-Daniel no site da Vice-Governadoria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">—</span>
                    <span>Retirada as pressas alegando "erro individual"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">—</span>
                    <span><strong>Dez/2024:</strong> TRE-GO declarou Caiado INELEGIVEL por 8 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">—</span>
                    <span>Uso do Palacio das Esmeraldas para campanha de Mabel</span>
                  </li>
                </ul>
                <div className="mt-3 p-2 bg-purple-100 rounded text-xs text-purple-800">
                  Violacao art. 37 CF: impessoalidade e moralidade administrativa
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 8 - SEGURANCA PUBLICA (CARRO-CHEFE)
    {
      id: 'security',
      content: (
        <div className="h-full flex flex-col p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Seguranca Publica: O Calcanhar de Aquiles</h2>
              <p className="text-orange-400">Carro-chefe de Caiado tem FISSURAS internas</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 mb-4">
                <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  O que Caiado EXIBE (numeros oficiais)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>Reducao homicidios (2018-2024)</span>
                    <span className="font-bold text-green-400">-55%</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>Reducao roubos de veiculos</span>
                    <span className="font-bold text-green-400">-93%</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>Reducao roubo de carga</span>
                    <span className="font-bold text-green-400">-97%</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>Resolutividade homicidios</span>
                    <span className="font-bold text-green-400">91%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">Investimento: R$ 17,5 bi em 6 anos (SSP-GO)</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-300 mb-3">Aprovacao por area (Quaest Ago/2025)</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Seguranca Publica</span>
                      <span className="text-green-400">+70%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Educacao</span>
                      <span className="text-green-400">+70%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Saude</span>
                      <span className="text-yellow-400">45%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 mb-4">
                <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  O que Caiado ESCONDE (crise interna)
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-white/5 rounded border-l-4 border-red-500">
                    <p className="font-bold text-red-300">Policia Civil em REVOLTA</p>
                    <p className="text-gray-400">Acordo de 2 anos RASGADO em dez/2024</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded border-l-4 border-red-500">
                    <p className="font-bold text-yellow-300">Ranking salarial VERGONHOSO</p>
                    <p className="text-gray-400">PIOR carreira dentro de GO (abaixo de PM/Bombeiros)</p>
                    <p className="text-gray-400">15ª pior PC do Brasil no ranking nacional</p>
                  </div>
                  <div className="p-2 bg-white/5 rounded border-l-4 border-red-500">
                    <p className="font-bold text-red-300">Outdoors CONTRA o governador</p>
                    <p className="text-gray-400">Campanha "Perguntar Nao Ofende" em todo GO</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded border-l-4 border-red-500">
                    <p className="font-bold text-red-300">Ato simbolico ABR/2025</p>
                    <p className="text-gray-400">Policiais carregaram CAIXAO representando "morte da PC"</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded border-l-4 border-red-500">
                    <p className="font-bold text-red-300">Estrategia: PERSEGUICAO</p>
                    <p className="text-gray-400">"Vamos seguir Caiado por onde for" - SINPOL</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 border border-orange-500/40 rounded-xl p-5">
                <h3 className="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  OPORTUNIDADE TATICA
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <strong className="text-orange-400">Paradoxo:</strong> Seguranca e o MELHOR indicador de Caiado,
                    mas quem ENTREGA os resultados (PC) esta em guerra com ele.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-orange-400">Angulo:</strong> Marconi pode se posicionar como quem
                    VAI VALORIZAR os policiais que fazem a seguranca funcionar.
                  </p>
                  <div className="mt-3 p-3 bg-orange-500 text-white rounded-lg text-center font-bold">
                    "Caiado colhe os louros, mas TRAI quem faz o trabalho"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 9 - PARADOXO CAIADO
    {
      id: 'paradox',
      content: (
        <div className="h-full flex flex-col p-12 bg-gradient-to-br from-gray-900 to-black text-white">
          <h2 className="text-4xl font-bold mb-2">O Paradoxo Caiado</h2>
          <p className="text-orange-400 text-lg mb-8">88% de aprovacao, mas...</p>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <div>
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 mb-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Forcas (nao se transferem automaticamente)
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <span>Aprovacao recorde</span>
                    <span className="text-2xl font-bold text-green-400">88%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <span>Menor rejeicao</span>
                    <span className="text-2xl font-bold text-green-400">1,7%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <span>"Merece eleger sucessor"</span>
                    <span className="text-2xl font-bold text-green-400">73%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-6 border border-orange-500/30 mb-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  Vulnerabilidades (janelas de oportunidade)
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-2 text-orange-400 font-bold mb-1">
                      <Clock className="w-4 h-4" />
                      Sai em ABRIL/2026
                    </div>
                    <p className="text-sm text-gray-300">Renuncia para disputar Presidencia/Senado</p>
                    <p className="text-sm text-gray-400">Daniel assume SEM padrinho presente</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-2 text-orange-400 font-bold mb-1">
                      <AlertTriangle className="w-4 h-4" />
                      Candidatura presidencial INCERTA
                    </div>
                    <p className="text-sm text-gray-400">Conflito com Ciro Nogueira (PP)</p>
                    <p className="text-sm text-gray-400">Divisao interna Uniao Brasil-PP</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-2 text-orange-400 font-bold mb-1">
                      <Users className="w-4 h-4" />
                      PL resistindo a alianca
                    </div>
                    <p className="text-sm text-gray-400">Wilder Morais lancado pre-candidato</p>
                    <p className="text-sm text-gray-400">Fragmentacao do voto conservador</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 text-white rounded-xl p-6 text-center">
            <Target className="w-8 h-8 mx-auto mb-2" />
            <p className="text-xl font-bold">
              Estrategia: Marconi como "gestor FOCADO EM GOIAS" enquanto Caiado olha para Brasilia
            </p>
          </div>
        </div>
      )
    },

    // SLIDE 9 - ELEITORADO
    {
      id: 'electorate',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">O Campo de Batalha</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8"></div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl">
              <Users className="w-8 h-8 text-orange-500" />
              <div>
                <span className="text-4xl font-bold">5.126.435</span>
                <span className="text-gray-400 ml-2">eleitores</span>
              </div>
              <div className="text-sm text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full">
                +15,3% desde 2018
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                Genero
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Mulheres</span>
                    <span className="font-bold">52%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div className="bg-orange-500 h-6 rounded-full" style={{width: '52%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Homens</span>
                    <span className="font-bold">48%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div className="bg-gray-600 h-6 rounded-full" style={{width: '48%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-orange-500" />
                Faixa Etaria
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-14 text-sm">18-24</span>
                  <div className="flex-1 bg-gray-200 rounded h-4">
                    <div className="bg-gray-400 h-4 rounded" style={{width: '12%'}}></div>
                  </div>
                  <span className="w-10 text-sm text-right">12%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-14 text-sm">25-34</span>
                  <div className="flex-1 bg-gray-200 rounded h-4">
                    <div className="bg-gray-400 h-4 rounded" style={{width: '18%'}}></div>
                  </div>
                  <span className="w-10 text-sm text-right">18%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-14 text-sm">35-44</span>
                  <div className="flex-1 bg-gray-200 rounded h-4">
                    <div className="bg-gray-400 h-4 rounded" style={{width: '21%'}}></div>
                  </div>
                  <span className="w-10 text-sm text-right">21%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-14 text-sm font-bold text-orange-600">45-59</span>
                  <div className="flex-1 bg-gray-200 rounded h-5">
                    <div className="bg-orange-500 h-5 rounded" style={{width: '24%'}}></div>
                  </div>
                  <span className="w-10 text-sm text-right font-bold text-orange-600">24%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-14 text-sm">60+</span>
                  <div className="flex-1 bg-gray-200 rounded h-4">
                    <div className="bg-gray-400 h-4 rounded" style={{width: '19%'}}></div>
                  </div>
                  <span className="w-10 text-sm text-right">19%</span>
                </div>
              </div>
              <p className="text-xs text-orange-600 mt-3 font-medium">Faixa 45-59 e decisiva</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Tendencia Critica
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">Eleitores 60+ em 1994</p>
                  <p className="text-2xl font-bold">11,6%</p>
                </div>
                <div className="p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-gray-600">Eleitores 60+ em 2024</p>
                  <p className="text-2xl font-bold text-orange-600">19,49%</p>
                </div>
                <div className="text-center p-3 bg-orange-500 text-white rounded-lg">
                  <p className="text-sm font-bold">+68% de crescimento</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">Base de Marconi (45+) esta CRESCENDO</p>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 10 - MUDANCAS DEMOGRAFICAS
    {
      id: 'demographics',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">A Revolucao Demografica de Goias</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8"></div>

          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-4 bg-orange-500 text-white px-8 py-4 rounded-2xl">
              <TrendingUp className="w-8 h-8" />
              <div>
                <span className="text-3xl font-bold">+17,6%</span>
                <span className="ml-2">crescimento 2010-2022</span>
              </div>
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                6M para 7M habitantes
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-black mb-4">58% do crescimento em 2 regioes</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 text-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span className="font-bold">Regiao Metropolitana Goiania</span>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-orange-400">2,48 milhoes</p>
                </div>
                <div className="bg-gray-100 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span className="font-bold text-black">Entorno do DF</span>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-orange-500">1,4 milhao</p>
                </div>
              </div>

              <div className="mt-6 bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                <h4 className="font-bold text-black mb-3">Perfil do Novo Eleitorado</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Urbano, trabalhador</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Conservador moderado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span className="font-bold">BAIXA LEALDADE PARTIDARIA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>CONQUISTAVEL com propostas concretas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black mb-4">Municipios que Explodiram</h3>
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-100 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-black">Goianira</p>
                    <p className="text-sm text-gray-500">Regiao Metropolitana</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-orange-500">+111%</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-100 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-black">Senador Canedo</p>
                    <p className="text-sm text-gray-500">Regiao Metropolitana</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-orange-500">+84%</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-100 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-black">Valparaiso</p>
                    <p className="text-sm text-gray-500">Entorno DF</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-orange-500">+49%</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-black text-white rounded-xl p-6">
                <Target className="w-8 h-8 text-orange-500 mb-3" />
                <p className="text-lg font-bold mb-2">Oportunidade Estrategica</p>
                <p className="text-gray-300 text-sm">
                  Novo eleitorado menos ligado as estruturas politicas tradicionais.
                  Aberto a propostas e narrativas que falem diretamente com suas necessidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 11 - CLUSTERS
    {
      id: 'clusters',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">Segmentacao do Eleitorado</h2>
          <div className="w-24 h-1 bg-orange-500 mb-6"></div>

          <div className="flex-1 grid grid-cols-3 gap-4">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="font-bold text-black">Saudosistas PSDB</h3>
                  <p className="text-xs text-orange-600">15-18% do eleitorado</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600"><strong>Perfil:</strong> 45+ anos, classe media, interior</p>
                <p className="text-gray-600"><strong>Valorizam:</strong> UEG, Bolsa Universitaria, Vapt Vupt</p>
                <div className="bg-white p-2 rounded-lg">
                  <p className="text-xs font-medium text-orange-700">"Voce sabe o que eu fiz, imagine o que posso fazer"</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="font-bold text-black">Pragmaticos da Gestao</h3>
                  <p className="text-xs text-blue-600">20-25% do eleitorado</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600"><strong>Perfil:</strong> Empresarios, profissionais liberais</p>
                <p className="text-gray-600"><strong>Avaliam:</strong> Competencia tecnica, nao ideologia</p>
                <div className="bg-white p-2 rounded-lg">
                  <p className="text-xs font-medium text-blue-700">"Governar exige experiencia. Daniel e vice."</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="font-bold text-black">Conservadores Anti-PT</h3>
                  <p className="text-xs text-green-600">15-20% do eleitorado</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600"><strong>Perfil:</strong> Agronegocio, interior, evangelicos</p>
                <p className="text-gray-600"><strong>Prioridade:</strong> Evitar esquerda no poder</p>
                <div className="bg-white p-2 rounded-lg">
                  <p className="text-xs font-medium text-green-700">"Goias nao pode correr riscos"</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="font-bold text-black">Jovens em Busca de Futuro</h3>
                  <p className="text-xs text-purple-600">10-15% do eleitorado</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600"><strong>Perfil:</strong> 18-35 anos, digital, baixa lealdade</p>
                <p className="text-gray-600"><strong>Querem:</strong> Oportunidades concretas</p>
                <div className="bg-white p-2 rounded-lg">
                  <p className="text-xs font-medium text-purple-700">"Futuro nao e experimento, precisa execucao"</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="font-bold text-black">Mulheres da RMG</h3>
                  <p className="text-xs text-pink-600">12-15% do eleitorado</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600"><strong>Perfil:</strong> Maioria do eleitorado, pautas praticas</p>
                <p className="text-gray-600"><strong>Foco:</strong> Seguranca, saude, educacao</p>
                <div className="bg-white p-2 rounded-lg">
                  <p className="text-xs font-medium text-pink-700">"Marconi criou programas, Daniel so assistiu"</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-8 h-8 text-orange-500" />
                <h3 className="font-bold">Recomendacao Vice</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">Perfil ideal para vice-governadora:</p>
                <ul className="space-y-1 text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-orange-500" />
                    <span>MULHER (Cluster 5)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-orange-500" />
                    <span>Regiao Metropolitana</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-orange-500" />
                    <span>Perfil tecnico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-orange-500" />
                    <span>Conservadora</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 12 - ANATOMIA DA REJEICAO
    {
      id: 'rejection',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">Anatomia da Rejeicao</h2>
          <p className="text-gray-500 mb-6">Mapeamento de gatilhos (abril-outubro 2025)</p>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-black">G1 - Tempo no poder</span>
                  <span className="text-2xl font-bold text-red-500">40%</span>
                </div>
                <div className="w-full bg-red-100 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{width: '40%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Narrativa "continuismo", "politico velho"</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-black">G2 - Corrupcao</span>
                  <span className="text-2xl font-bold text-red-400">35%</span>
                </div>
                <div className="w-full bg-red-100 rounded-full h-3">
                  <div className="bg-red-400 h-3 rounded-full" style={{width: '35%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Operacao Panaceia (fev/2025)</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-black">G4 - Desempenho</span>
                  <span className="text-2xl font-bold text-yellow-600">20%</span>
                </div>
                <div className="w-full bg-yellow-100 rounded-full h-3">
                  <div className="bg-yellow-500 h-3 rounded-full" style={{width: '20%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">"Obras inacabadas"</p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-black">G3 - Prisao/processos</span>
                  <span className="text-2xl font-bold text-orange-500">15%</span>
                </div>
                <div className="w-full bg-orange-100 rounded-full h-3">
                  <div className="bg-orange-400 h-3 rounded-full" style={{width: '15%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Historico 2018</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Coocorrencias Criticas
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <p className="font-medium">G1 + G4</p>
                    <p className="text-sm text-gray-400">"Muito tempo + obras inacabadas" = frame FIXADO</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <p className="font-medium">G2 + G3</p>
                    <p className="text-sm text-gray-400">Corrupcao + prisao = reforco mutuo</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-100 border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="font-bold text-black">Evento Critico</h3>
                </div>
                <p className="text-lg font-bold text-red-700">Operacao Panaceia</p>
                <p className="text-sm text-gray-600">06 de fevereiro de 2025</p>
                <p className="text-sm text-gray-600 mt-2">Reativou narrativas sobre G2 e G3</p>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                <p className="text-sm font-medium text-orange-800">
                  Necessidade de REPOSICIONAMENTO antes de reconstrucao de imagem
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 13 - RESSIGNIFICACAO
    {
      id: 'reframe',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">Estrategia de Ressignificacao</h2>
          <p className="text-gray-500 mb-8">Transformando fraqueza em forca</p>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">G1: "Muito tempo no poder"</h3>
                    <p className="text-sm text-red-500">40% das mencoes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                    <span className="text-red-500 font-bold">ATAQUE:</span>
                    <span className="text-gray-600">"Politico velho, continuismo"</span>
                  </div>
                  <div className="text-center py-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 mx-auto rotate-90" />
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <span className="text-green-600 font-bold">RESPOSTA:</span>
                    <span className="text-gray-600">"Experiencia comprovada"</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700">"Voces me conhecem. Sabem exatamente o que fiz. 16 anos de entregas concretas."</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-400 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">G2: Corrupcao/Panaceia</h3>
                    <p className="text-sm text-red-400">35% das mencoes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                    <span className="text-red-500 font-bold">ATAQUE:</span>
                    <span className="text-gray-600">"Corrupto, investigado"</span>
                  </div>
                  <div className="text-center py-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 mx-auto rotate-90" />
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <span className="text-green-600 font-bold">RESPOSTA:</span>
                    <span className="text-gray-600">Nao fugir, CONFRONTAR com dados</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700">"Investigacao em andamento ≠ condenacao. Transparencia total."</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">G4: "Obras inacabadas"</h3>
                    <p className="text-sm text-yellow-600">20% das mencoes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                    <span className="text-red-500 font-bold">ATAQUE:</span>
                    <span className="text-gray-600">"Deixou obras paradas"</span>
                  </div>
                  <div className="text-center py-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 mx-auto rotate-90" />
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <span className="text-green-600 font-bold">RESPOSTA:</span>
                    <span className="text-gray-600">COMPARAR com dados</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700">"FUNDEINFRA: 44 obras prometidas, 1 concluida. Quem deixa obras paradas?"</p>
                </div>
              </div>

              <div className="bg-black text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  Reposicionamento Geral
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 line-through">politico velho</span>
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-400 font-bold">estadista experiente</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 line-through">passado</span>
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-400 font-bold">quem ja provou</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 line-through">continuismo</span>
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-400 font-bold">gestao testada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 14 - ESTRATEGIA TERRITORIAL
    {
      id: 'territory',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">Estrategia Territorial</h2>
          <p className="text-gray-500 mb-6">Os 5 bolsoes prioritarios</p>

          <div className="flex-1 grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-3">
              <div className="bg-orange-500 text-white rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold">Cidades Medias RMG</h4>
                    <p className="text-sm text-orange-100">Aparecida, Senador Canedo, Anapolis</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">700 mil</p>
                  <p className="text-xs text-orange-200">35% recursos</p>
                </div>
              </div>

              <div className="bg-green-600 text-white rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold">Interior do Agronegocio</h4>
                    <p className="text-sm text-green-100">Rio Verde, Jatai, Itumbiara</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">225 mil</p>
                  <p className="text-xs text-green-200">25% recursos</p>
                </div>
              </div>

              <div className="bg-gray-700 text-white rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold">Goiania Oeste/Centro</h4>
                    <p className="text-sm text-gray-300">Bairros nobres, classe media-alta</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">350 mil</p>
                  <p className="text-xs text-gray-400">15% recursos</p>
                </div>
              </div>

              <div className="bg-gray-500 text-white rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold">Goiania Sul/Periferias</h4>
                    <p className="text-sm text-gray-200">Classe media-baixa</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">250 mil</p>
                  <p className="text-xs text-gray-300">10% recursos</p>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold">Entorno do DF</h4>
                    <p className="text-sm text-blue-100">Luziania, Valparaiso, Aguas Lindas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">350 mil</p>
                  <p className="text-xs text-blue-200">15% recursos</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 text-white rounded-xl p-5">
                <h4 className="font-bold mb-3">Total em Bolsoes</h4>
                <p className="text-4xl font-bold text-orange-400">1,875 mi</p>
                <p className="text-sm text-gray-400">36% do eleitorado total</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-bold text-black mb-3">Metas por Bolsao</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>B1 Agro</span>
                    <span className="font-bold text-green-600">55-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B2 RMG</span>
                    <span className="font-bold text-orange-500">45-50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B3 GO Oeste</span>
                    <span className="font-bold text-gray-600">50-55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B4 GO Sul</span>
                    <span className="font-bold text-gray-500">48-52%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B5 Entorno</span>
                    <span className="font-bold text-blue-600">45-50%</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                <p className="text-sm font-medium text-orange-800">
                  Foco prioritario: Bolsao 2 (RMG) concentra maior volume e potencial de conversao
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 15 - PLANO DE ATAQUE FASE 1
    {
      id: 'phase1',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">Plano de Ataque</h2>
          <p className="text-gray-500 mb-6">Fase 1: Dezembro 2025 - Marco 2026</p>

          <div className="flex-1 grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Flag className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-black">Frente 1: Conquistar o Agro</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Agenda intensiva: Rio Verde, Jatai, Itumbiara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Reunioes com sindicatos rurais e cooperativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Posicao publica: "Zero Taxa do Agro"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Explorar: Daniel prometeu mas nao assume</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-black">Frente 2: Ressignificar o Tempo</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span>Campanha "Legado Marconi": UEG, Vapt Vupt, Renda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span>Testemunhos de beneficiados (videos curtos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span>Dados comparativos: Marconi vs governo atual</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-black">Frente 3: Definir Vice Estrategica</h3>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-2">Perfil ideal:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 p-2 bg-pink-100 rounded">
                      <CheckCircle className="w-3 h-3 text-pink-500" />
                      <span>MULHER</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-pink-100 rounded">
                      <CheckCircle className="w-3 h-3 text-pink-500" />
                      <span>Regiao Metro</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-pink-100 rounded">
                      <CheckCircle className="w-3 h-3 text-pink-500" />
                      <span>Perfil tecnico</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-pink-100 rounded">
                      <CheckCircle className="w-3 h-3 text-pink-500" />
                      <span>Conservadora</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-black">Frente 4: Articulacao Politica</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span>Visitar camaras: Goiania, Anapolis, Trindade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span>Reunioes com prefeitos nao-alinhados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span>Consolidar alianca com Podemos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span>NAO atacar Wilder (PL) - porta aberta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 16 - PLANO DE ATAQUE FASE 2
    {
      id: 'phase2',
      content: (
        <div className="h-full flex flex-col p-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <h2 className="text-4xl font-bold mb-2">Momento Critico</h2>
          <p className="text-orange-100 mb-8">Abril 2026: Quando Caiado renuncia</p>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 mb-6">
                <AlertTriangle className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-4">O Que Acontece em Abril</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 mt-0.5" />
                    <span>Caiado RENUNCIA para disputar Presidencia/Senado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 mt-0.5" />
                    <span>Daniel ASSUME como governador interino</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 mt-0.5" />
                    <span>Daniel disputara "reeleicao" como incumbente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 backdrop-blur rounded-xl p-6">
                <Target className="w-8 h-8 mb-3" />
                <h3 className="text-lg font-bold mb-2">Oportunidade</h3>
                <p className="text-orange-100">
                  Daniel SEM padrinho presente. Narrativa: "Caiado abandonou Goias por ambicao pessoal"
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white text-black rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Taticas Para Este Momento</h3>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-orange-500 rounded text-white flex items-center justify-center text-sm font-bold">1</div>
                      <span className="font-bold">Contrastar Dedicacao</span>
                    </div>
                    <p className="text-sm text-gray-600">"Eu estou aqui, focado 100% em Goias. Daniel esta de olho em Brasilia."</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-orange-500 rounded text-white flex items-center justify-center text-sm font-bold">2</div>
                      <span className="font-bold">Lancar Plano de Governo</span>
                    </div>
                    <p className="text-sm text-gray-600">Conselho tecnico, propostas detalhadas, habitacao, tecnologia/IA</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-orange-500 rounded text-white flex items-center justify-center text-sm font-bold">3</div>
                      <span className="font-bold">Escalar Digital</span>
                    </div>
                    <p className="text-sm text-gray-600">Ativar todas personas, influenciadores jovens, midia tradicional no interior</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-orange-500 rounded text-white flex items-center justify-center text-sm font-bold">4</div>
                      <span className="font-bold">Corpo a Corpo</span>
                    </div>
                    <p className="text-sm text-gray-600">META: 150+ municipios visitados ate julho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 17 - TESE DE VITORIA
    {
      id: 'victory',
      content: (
        <div className="h-full flex flex-col p-12 bg-white">
          <h2 className="text-4xl font-bold text-black mb-2">As 5 Condicoes Para Vencer</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8"></div>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-orange-400">A Virada e Possivel Porque:</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-bold">Maior virada da historia de GO</p>
                      <p className="text-sm text-gray-400">1998 - de improvavel a governador</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-bold">Venceu Iris Rezende 4 vezes</p>
                      <p className="text-sm text-gray-400">O "imbativel" que ninguem derrotava</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-bold">Caiado sai em Abril/2026</p>
                      <p className="text-sm text-gray-400">Daniel perde padrinho no momento critico</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="font-bold">Taxa do Agro = arma eleitoral</p>
                      <p className="text-sm text-gray-400">Produtores rurais revoltados, base de Marconi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <p className="font-bold">2o turno: consolidacao anti-oligarquia</p>
                      <p className="text-sm text-gray-400">Votos Wilder + indecisos + anti-Caiado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-black mb-4">Cenario de Vitoria (2o turno)</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-600">Marconi 1o turno</span>
                    <span className="font-bold">~28-32%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-600">+ Votos Wilder/PL</span>
                    <span className="font-bold">~8-10%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-600">+ Indecisos convertidos</span>
                    <span className="font-bold">~5-8%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-600">+ Anti-Caiado pragmaticos</span>
                    <span className="font-bold">~5%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-500 text-white rounded-lg">
                    <span className="font-bold">TOTAL POTENCIAL 2o TURNO</span>
                    <span className="text-2xl font-bold">~50-52%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-4">Metricas de Sucesso</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-lg text-center">
                    <p className="text-xs text-gray-500">Rejeicao Meta</p>
                    <p className="text-xl font-bold text-orange-500">30-35%</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg text-center">
                    <p className="text-xs text-gray-500">Intencao Meta</p>
                    <p className="text-xl font-bold text-orange-500">28-32%</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg text-center">
                    <p className="text-xs text-gray-500">Municipios</p>
                    <p className="text-xl font-bold text-orange-500">150+</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg text-center">
                    <p className="text-xs text-gray-500">Conversao Digital</p>
                    <p className="text-xl font-bold text-orange-500">15%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 18 - CONCLUSAO EXECUTIVA
    {
      id: 'conclusion',
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center px-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="mb-8">
            <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-5xl font-bold mb-8">A Tese da Reconquista</h2>

          <div className="w-32 h-1 bg-orange-500 mb-12"></div>

          <div className="max-w-4xl">
            <p className="text-xl text-gray-300 mb-8">
              A eleicao de 2026 em Goias e uma escolha entre:
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
                <p className="text-gray-400 text-sm mb-2">OPCAO A</p>
                <p className="text-2xl font-bold text-gray-400">A Perpetuacao das Oligarquias</p>
                <p className="text-sm text-gray-500 mt-3">Caiado + Vilela = 150 anos de poder familiar</p>
              </div>
              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-8 border border-orange-500/50">
                <p className="text-orange-400 text-sm mb-2">OPCAO B</p>
                <p className="text-2xl font-bold text-orange-400">A Experiencia Comprovada</p>
                <p className="text-sm text-orange-300 mt-3">Marconi = 16 anos de entregas, vencedor de gigantes</p>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <p className="text-xl text-gray-300">
                Daniel Vilela <span className="text-gray-500">HERDOU</span> seu lugar na politica.
              </p>
              <p className="text-xl text-gray-300">
                Marconi Perillo <span className="text-orange-400 font-bold">CONQUISTOU</span> o dele.
              </p>
            </div>

            <div className="bg-orange-500 text-white p-8 rounded-2xl mb-12">
              <p className="text-3xl font-bold">
                "Governar exige experiencia, nao sobrenome."
              </p>
            </div>

            <p className="text-2xl font-light text-gray-400 mb-4">
              Com dados, inteligencia e estrategia,
            </p>
            <p className="text-3xl font-bold text-orange-400">
              transformamos aprovacao em votos
            </p>
          </div>

          <div className="mt-16 text-sm text-gray-500">
            <p className="font-semibold text-white">CUBE INTELIGENCIA POLITICA</p>
            <p>Neuromarketing | Analise de Dados | Inteligencia Artificial</p>
          </div>
        </div>
      )
    },

    // SLIDE 19 - CTA FINAL
    {
      id: 'cta',
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center px-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="mb-6">
              <span className="text-orange-400 text-lg font-medium tracking-widest">MARCONI PERILLO 2026</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Goias merece quem<br/>
              <span className="text-orange-500">ja provou que governa.</span>
            </h2>

            <div className="w-32 h-1 bg-orange-500 mx-auto my-8"></div>

            <p className="text-xl font-light mb-8 max-w-2xl text-gray-300">
              Experiencia testada contra oligarquias herdadas.<br/>
              <span className="text-white font-medium">A reconquista comeca agora.</span>
            </p>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 max-w-3xl mx-auto mb-10">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold">16</p>
                  <p className="text-sm text-orange-100">anos governando</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">4x</p>
                  <p className="text-sm text-orange-100">venceu Iris Rezende</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">1</p>
                  <p className="text-sm text-orange-100">outsider que quebrou oligarquias</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 justify-center mb-12">
              <div className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-colors cursor-pointer shadow-lg shadow-orange-500/30">
                Vamos Comecar
              </div>
              <div className="bg-white/10 backdrop-blur px-10 py-5 rounded-xl font-bold text-xl border-2 border-white/30 hover:bg-white/20 transition-colors cursor-pointer">
                Agendar Reuniao
              </div>
            </div>

            <p className="text-2xl font-bold text-orange-400 italic mb-8">
              "Governar exige experiencia, nao sobrenome."
            </p>
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <div className="flex items-center justify-center gap-8 text-white/50 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>IA Aplicada</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Dados Precisos</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Estrategia Vencedora</span>
              </div>
            </div>
            <p className="text-white/40 text-sm">CUBE INTELIGENCIA POLITICA | cubeinteligencia.com.br</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full h-screen bg-white flex flex-col overflow-hidden">
      {/* Main Slide Area */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-300">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-black text-white px-8 py-4 flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Anterior</span>
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-orange-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500 w-2'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === slides.length - 1}
          >
            <span>Proximo</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
