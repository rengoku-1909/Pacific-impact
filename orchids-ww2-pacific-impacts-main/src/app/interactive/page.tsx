"use client";

import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';
import { useState } from 'react';
import { BarChart3, TrendingUp, Users, MapPin } from 'lucide-react';

export default function InteractivePage() {
  const [selectedCountry, setSelectedCountry] = useState('japan');

  const countryData = {
    japan: {
      name: "Japan",
      color: "bg-blue-500",
      population: { pre: 72, post: 83, current: 125 },
      gdp: { 1945: 10, 1955: 45, 1965: 120 },
      urbanization: { 1945: 28, 1955: 56, 1965: 68 },
      literacy: { 1945: 85, 1955: 95, 1965: 98 }
    },
    china: {
      name: "China",
      color: "bg-red-500",
      population: { pre: 540, post: 560, current: 1400 },
      gdp: { 1945: 15, 1955: 25, 1965: 40 },
      urbanization: { 1945: 10, 1955: 13, 1965: 18 },
      literacy: { 1945: 20, 1955: 30, 1965: 50 }
    },
    korea: {
      name: "Korea",
      color: "bg-green-500",
      population: { pre: 25, post: 30, current: 77 },
      gdp: { 1945: 5, 1955: 12, 1965: 28 },
      urbanization: { 1945: 14, 1955: 21, 1965: 35 },
      literacy: { 1945: 22, 1955: 45, 1965: 71 }
    },
    vietnam: {
      name: "Vietnam",
      color: "bg-yellow-500",
      population: { pre: 20, post: 24, current: 98 },
      gdp: { 1945: 8, 1955: 15, 1965: 22 },
      urbanization: { 1945: 11, 1955: 15, 1965: 19 },
      literacy: { 1945: 10, 1955: 20, 1965: 35 }
    },
    thailand: {
      name: "Thailand",
      color: "bg-purple-500",
      population: { pre: 17, post: 19, current: 70 },
      gdp: { 1945: 12, 1955: 20, 1965: 35 },
      urbanization: { 1945: 10, 1955: 13, 1965: 20 },
      literacy: { 1945: 48, 1955: 60, 1965: 72 }
    }
  };

  const data = countryData[selectedCountry as keyof typeof countryData];

  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Interactive Data</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto">
            Explore statistics and trends across the Pacific region
          </p>
        </div>
      </section>

      {/* Country Selector */}
      <section className="py-8 sm:py-12 bg-white border-b">
        <div className="container max-w-6xl px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Select a Country</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {Object.entries(countryData).map(([key, country]) => (
              <button
                key={key}
                onClick={() => setSelectedCountry(key)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  selectedCountry === key
                    ? `${country.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {country.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container max-w-6xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Key Indicators for {data.name}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="bg-white rounded-xl p-5 sm:p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                <h3 className="font-semibold text-gray-600 text-sm sm:text-base">Population</h3>
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">{data.population.current}M</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Current (millions)</div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                <h3 className="font-semibold text-gray-600 text-sm sm:text-base">GDP Growth</h3>
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">+{data.gdp[1965] - data.gdp[1945]}%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">1945-1965 Change</div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
                <h3 className="font-semibold text-gray-600 text-sm sm:text-base">Urbanization</h3>
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">{data.urbanization[1965]}%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">By 1965</div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
                <h3 className="font-semibold text-gray-600 text-sm sm:text-base">Literacy Rate</h3>
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">{data.literacy[1965]}%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">By 1965</div>
            </div>
          </div>

          {/* GDP Growth Chart */}
          <div className="bg-white rounded-xl p-5 sm:p-8 border shadow-sm mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">GDP Index (1945 = Baseline)</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium">1945</span>
                  <span className="text-xs sm:text-sm font-medium">{data.gdp[1945]}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 sm:h-8">
                  <div
                    className={`${data.color} h-6 sm:h-8 rounded-full transition-all duration-1000 flex items-center justify-end pr-2 sm:pr-3`}
                    style={{ width: `${(data.gdp[1945] / 120) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">{data.gdp[1945]}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium">1955</span>
                  <span className="text-xs sm:text-sm font-medium">{data.gdp[1955]}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 sm:h-8">
                  <div
                    className={`${data.color} h-6 sm:h-8 rounded-full transition-all duration-1000 flex items-center justify-end pr-2 sm:pr-3`}
                    style={{ width: `${(data.gdp[1955] / 120) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">{data.gdp[1955]}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium">1965</span>
                  <span className="text-xs sm:text-sm font-medium">{data.gdp[1965]}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 sm:h-8">
                  <div
                    className={`${data.color} h-6 sm:h-8 rounded-full transition-all duration-1000 flex items-center justify-end pr-2 sm:pr-3`}
                    style={{ width: `${(data.gdp[1965] / 120) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">{data.gdp[1965]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Population Growth Chart */}
          <div className="bg-white rounded-xl p-5 sm:p-8 border shadow-sm mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Population Growth (millions)</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium">Pre-War (1940)</span>
                  <span className="text-xs sm:text-sm font-medium">{data.population.pre}M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 sm:h-8">
                  <div
                    className={`${data.color} h-6 sm:h-8 rounded-full transition-all duration-1000 flex items-center justify-end pr-2 sm:pr-3`}
                    style={{ width: `${(data.population.pre / data.population.current) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">{data.population.pre}M</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium">Post-War (1950)</span>
                  <span className="text-xs sm:text-sm font-medium">{data.population.post}M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 sm:h-8">
                  <div
                    className={`${data.color} h-6 sm:h-8 rounded-full transition-all duration-1000 flex items-center justify-end pr-2 sm:pr-3`}
                    style={{ width: `${(data.population.post / data.population.current) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">{data.population.post}M</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium">Current (2020s)</span>
                  <span className="text-xs sm:text-sm font-medium">{data.population.current}M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 sm:h-8">
                  <div
                    className={`${data.color} h-6 sm:h-8 rounded-full transition-all duration-1000 flex items-center justify-end pr-2 sm:pr-3`}
                    style={{ width: '100%' }}
                  >
                    <span className="text-white text-xs font-bold">{data.population.current}M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urbanization & Literacy Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-5 sm:p-8 border shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Urbanization Rate</h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium">1945</span>
                    <span className="text-xs sm:text-sm font-medium">{data.urbanization[1945]}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6">
                    <div
                      className={`${data.color} h-5 sm:h-6 rounded-full transition-all duration-1000`}
                      style={{ width: `${data.urbanization[1945]}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium">1955</span>
                    <span className="text-xs sm:text-sm font-medium">{data.urbanization[1955]}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6">
                    <div
                      className={`${data.color} h-5 sm:h-6 rounded-full transition-all duration-1000`}
                      style={{ width: `${data.urbanization[1955]}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium">1965</span>
                    <span className="text-xs sm:text-sm font-medium">{data.urbanization[1965]}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6">
                    <div
                      className={`${data.color} h-5 sm:h-6 rounded-full transition-all duration-1000`}
                      style={{ width: `${data.urbanization[1965]}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-8 border shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Literacy Rate</h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium">1945</span>
                    <span className="text-xs sm:text-sm font-medium">{data.literacy[1945]}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6">
                    <div
                      className={`${data.color} h-5 sm:h-6 rounded-full transition-all duration-1000`}
                      style={{ width: `${data.literacy[1945]}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium">1955</span>
                    <span className="text-xs sm:text-sm font-medium">{data.literacy[1955]}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6">
                    <div
                      className={`${data.color} h-5 sm:h-6 rounded-full transition-all duration-1000`}
                      style={{ width: `${data.literacy[1955]}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium">1965</span>
                    <span className="text-xs sm:text-sm font-medium">{data.literacy[1965]}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6">
                    <div
                      className={`${data.color} h-5 sm:h-6 rounded-full transition-all duration-1000`}
                      style={{ width: `${data.literacy[1965]}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Notes */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="container max-w-4xl px-4">
          <div className="bg-white rounded-xl p-5 sm:p-8 border shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold mb-4">About This Data</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              The statistics presented here are based on historical records and estimates from various sources including 
              national archives, the United Nations, World Bank, and academic research. Data from the immediate post-war 
              period (1945-1955) may vary depending on the source due to the challenging conditions of that era.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              <strong>Note:</strong> GDP figures are indexed for comparison purposes. Actual values varied significantly 
              based on reconstruction efforts, international aid, and economic policies adopted by each nation. Population 
              figures reflect general trends but may not account for all displacement and migration during and after the war.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}