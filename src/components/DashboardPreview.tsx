import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Target, BarChart3, Award } from 'lucide-react';
import dashboardImage from '@/assets/dashboard-preview.jpg';

const DashboardPreview = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills = [
    { name: 'Farming', value: 85, color: 'text-neon-green' },
    { name: 'Fighting', value: 72, color: 'text-neon-cyan' },
    { name: 'Pushing', value: 68, color: 'text-neon-purple' },
    { name: 'Survival', value: 79, color: 'text-neon-yellow' },
    { name: 'Vision', value: 65, color: 'text-neon-red' },
    { name: 'Versatility', value: 74, color: 'text-white' }
  ];

  const recentMatches = [
    { result: 'W', kda: '12/3/8', duration: '45:23', hero: 'Pudge' },
    { result: 'L', kda: '8/7/12', duration: '38:15', hero: 'Invoker' },
    { result: 'W', kda: '15/2/6', duration: '32:44', hero: 'PA' },
    { result: 'W', kda: '6/4/18', duration: '41:12', hero: 'CM' },
    { result: 'L', kda: '9/6/10', duration: '52:08', hero: 'SF' }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
            Tu Dashboard <span className="text-neon-cyan">Personalizado</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Visualiza tu progreso con métricas que realmente importan. 
            <span className="text-neon-green"> Sin información basura, solo datos accionables.</span>
          </p>
        </div>

        {/* Interactive Dashboard */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="space-y-8">
            {/* Tab Navigation */}
            <TabsList className="grid gap-2 grid-cols-2 lg:grid-cols-4 bg-bg-tertiary/50 backdrop-blur-md">
              <TabsTrigger value="overview" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                Visión General
              </TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black">
                Análisis Detallado
              </TabsTrigger>
              <TabsTrigger value="improvement" className="data-[state=active]:bg-neon-purple data-[state=active]:text-black bg-bg-tertiary/50">
                Plan de Mejora
              </TabsTrigger>
              <TabsTrigger value="progress" className="data-[state=active]:bg-neon-yellow data-[state=active]:text-black bg-bg-tertiary/50">
                Progreso
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Skills Hexagon */}
                <div className="glass-card p-8 lg:mt-0 mt-8">
                  <h3 className="font-orbitron font-bold text-xl mb-6 text-center">
                    Análisis de Habilidades
                  </h3>
                  
                  {/* Skills List with Hover */}
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-lg bg-bg-tertiary/50 hover:bg-bg-tertiary transition-all duration-300 cursor-pointer"
                        onMouseEnter={() => setActiveSkill(skill.name)}
                        onMouseLeave={() => setActiveSkill(null)}
                      >
                        <span className="font-semibold">{skill.name}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 bg-bg-primary rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-neon-green to-neon-cyan transition-all duration-500`}
                              style={{ width: `${skill.value}%` }}
                            />
                          </div>
                          <span className={`font-mono font-bold ${skill.color}`}>
                            {skill.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeSkill && (
                    <div className="mt-4 p-4 bg-neon-cyan/10 rounded-lg border border-neon-cyan/30">
                      <p className="text-sm text-neon-cyan">
                        {activeSkill === 'Farming' && "Tu GPM está por encima del promedio, pero puedes optimizar el timing de last hits."}
                        {activeSkill === 'Fighting' && "Buen KDA general, pero evita fights prolongados cuando tienes ventaja."}
                        {activeSkill === 'Pushing' && "Mejora tu map awareness para pushes más efectivos."}
                        {activeSkill === 'Survival' && "Excelente positioning, mantén este nivel."}
                        {activeSkill === 'Vision' && "Coloca más wards defensivos en mid-game."}
                        {activeSkill === 'Versatility' && "Buen pool de héroes, experimenta con nuevos roles."}
                      </p>
                    </div>
                  )}
                </div>

                {/* Key Metrics */}
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <h3 className="font-orbitron font-bold text-xl mb-4">Métricas Clave</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-neon-green font-mono">567</div>
                        <div className="text-sm text-text-secondary">GPM Promedio</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-neon-cyan font-mono">689</div>
                        <div className="text-sm text-text-secondary">XPM Promedio</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-neon-purple font-mono">4.2</div>
                        <div className="text-sm text-text-secondary">KDA Ratio</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-neon-yellow font-mono">65</div>
                        <div className="text-sm text-text-secondary">LH/10min</div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6">
                    <h3 className="font-orbitron font-bold text-xl mb-4">Proyección de Rank</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-neon-red">Guardian II</div>
                        <div className="text-sm text-text-secondary">Actual</div>
                      </div>
                      <TrendingUp className="w-8 h-8 text-neon-green" />
                      <div className="text-center">
                        <div className="text-lg font-bold text-neon-green">Cruzado III</div>
                        <div className="text-sm text-text-secondary">Proyectado (45 días)</div>
                      </div>
                    </div>
                    
                    <div className="w-full h-2 bg-bg-primary rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-neon-red to-neon-green transition-all duration-1000" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Matches */}
              <div className="glass-card p-8">
                <h3 className="font-orbitron font-bold text-xl mb-6">Últimas 20 Partidas</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3">Resultado</th>
                        <th className="text-left py-3">Héroe</th>
                        <th className="text-left py-3">KDA</th>
                        <th className="text-left py-3">Duración</th>
                        <th className="text-left py-3">Análisis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentMatches.map((match, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded text-sm font-bold ${
                              match.result === 'W' ? 'bg-neon-green/20 text-neon-green' : 'bg-neon-red/20 text-neon-red'
                            }`}>
                              {match.result}
                            </span>
                          </td>
                          <td className="py-3 font-semibold">{match.hero}</td>
                          <td className="py-3 font-mono">{match.kda}</td>
                          <td className="py-3 font-mono text-text-secondary">{match.duration}</td>
                          <td className="py-3">
                            <button className="text-neon-cyan hover:text-neon-green transition-colors text-sm">
                              Ver Detalles
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Analysis Tab */}
            <TabsContent value="analysis">
              <div className="glass-card p-8 lg:mt-0 mt-14">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-orbitron font-bold text-2xl mb-6">
                      Análisis IA Completo
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Nuestra IA analiza cada movimiento, decisión y timing en tus partidas. 
                      Aquí puedes ver exactamente qué patrones están limitando tu progreso.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-neon-cyan" />
                        <span>Análisis de eficiencia de farming</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-neon-green" />
                        <span>Patrones de posicionamiento en teamfights</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-neon-purple" />
                        <span>Timing de habilidades y items</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={dashboardImage} 
                      alt="Dashboard Analysis Preview"
                      className="w-full rounded-xl border border-white/10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent rounded-xl" />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Improvement Tab */}
            <TabsContent value="improvement" className='mt-8'>
              <div className="glass-card p-8 text-center lg:mt-0 mt-14">
                <h3 className="font-orbitron font-bold text-2xl mb-4">Plan de Mejora Personalizado</h3>
                <p className="text-text-secondary mb-8">
                  Basado en tu análisis, aquí están las áreas prioritarias para mejorar tu gameplay.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="glass-card p-6 border-neon-red/30">
                    <div className="text-neon-red font-bold mb-2">CRÍTICO</div>
                    <h4 className="font-semibold mb-2">Vision Control</h4>
                    <p className="text-sm text-text-secondary">Aumentar wards por minuto en 40%</p>
                  </div>
                  <div className="glass-card p-6 border-neon-yellow/30">
                    <div className="text-neon-yellow font-bold mb-2">IMPORTANTE</div>
                    <h4 className="font-semibold mb-2">Last Hit Timing</h4>
                    <p className="text-sm text-text-secondary">Mejorar precisión en 15%</p>
                  </div>
                  <div className="glass-card p-6 border-neon-green/30">
                    <div className="text-neon-green font-bold mb-2">MANTENER</div>
                    <h4 className="font-semibold mb-2">Team Fighting</h4>
                    <p className="text-sm text-text-secondary">Excelente positioning</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress">
              <div className="glass-card p-8 text-center lg:mt-0 mt-14">
                <h3 className="font-orbitron font-bold text-2xl mb-4">Tu Progreso en Legends</h3>
                <p className="text-text-secondary mb-8">
                  Métricas de mejora desde que comenzaste a usar Legends.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="glass-card p-6">
                    <div className="text-3xl font-bold text-neon-green mb-2">+68%</div>
                    <div className="text-sm text-text-secondary">Mejora General</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-3xl font-bold text-neon-cyan mb-2">+245</div>
                    <div className="text-sm text-text-secondary">MMR Ganado</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-3xl font-bold text-neon-purple mb-2">73%</div>
                    <div className="text-sm text-text-secondary">Winrate L20</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-3xl font-bold text-neon-yellow mb-2">28</div>
                    <div className="text-sm text-text-secondary">Días de Uso</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;