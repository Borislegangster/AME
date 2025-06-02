import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Building2, FileText, Mail, TrendingUp, UserPlus, Eye, ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Jan', visits: 4000, projects: 2400 },
  { name: 'Fév', visits: 3000, projects: 1398 },
  { name: 'Mar', visits: 2000, projects: 9800 },
  { name: 'Avr', visits: 2780, projects: 3908 },
  { name: 'Mai', visits: 1890, projects: 4800 },
  { name: 'Jun', visits: 2390, projects: 3800 },
];

const stats = [
  {
    name: 'Utilisateurs',
    value: '2,300',
    change: '+12%',
    icon: Users,
  },
  {
    name: 'Projets',
    value: '45',
    change: '+8%',
    icon: Building2,
  },
  {
    name: 'Articles',
    value: '24',
    change: '+15%',
    icon: FileText,
  },
  {
    name: 'Messages',
    value: '156',
    change: '+3%',
    icon: Mail,
  },
];

const recentActivity = [
  {
    id: 1,
    user: 'Boris Tatou',
    action: 'a créé un nouveau projet',
    time: 'Il y a 2 heures',
  },
  {
    id: 2,
    user: 'Alice Martin',
    action: 'a modifié un article',
    time: 'Il y a 3 heures',
  },
  {
    id: 3,
    user: 'Jean Dupont',
    action: 'a ajouté un utilisateur',
    time: 'Il y a 5 heures',
  },
];

export function Dashboard() {
  const [period, setPeriod] = useState('7j');

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500">Vue d'ensemble de votre activité</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <stat.icon className="h-6 w-6 text-[#3498db]" />
              </div>
              <span className="flex items-center text-sm text-green-600">
                {stat.change}
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500">{stat.name}</p>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Visites et Projets</h3>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="border rounded-md px-3 py-1"
            >
              <option value="7j">7 jours</option>
              <option value="30j">30 jours</option>
              <option value="90j">90 jours</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visits" fill="#3498db" name="Visites" />
              <Bar dataKey="projects" fill="#0a1e37" name="Projets" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Activité récente</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserPlus className="h-4 w-4 text-[#3498db]" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.user} {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-[#0a1e37] text-white">
          <TrendingUp className="h-8 w-8 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Nouveau Projet</h3>
          <p className="text-gray-300 mb-4">Créez et gérez un nouveau projet de construction</p>
          <button className="bg-[#3498db] hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Créer un projet
          </button>
        </Card>

        <Card className="p-6 bg-[#3498db] text-white">
          <FileText className="h-8 w-8 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Nouvel Article</h3>
          <p className="text-gray-100 mb-4">Publiez un nouvel article sur le blog</p>
          <button className="bg-white hover:bg-gray-100 text-[#3498db] px-4 py-2 rounded-lg transition">
            Rédiger
          </button>
        </Card>

        <Card className="p-6 border-2 border-dashed">
          <Eye className="h-8 w-8 mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">Voir le site</h3>
          <p className="text-gray-500 mb-4">Visitez votre site web public</p>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg transition">
            Visiter
          </button>
        </Card>
      </div>
    </div>
  );
}