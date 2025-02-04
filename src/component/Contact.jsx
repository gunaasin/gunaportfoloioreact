"use client";
import React from "react";
import { Linkedin, Github, Mail, CircleDot } from 'lucide-react';
export const Contact = () => {
    return (
      <div className="min-h-screen  w-screen overflow-hidden relative flex flex-col items-center justify-center">
        {/* Background Grid */}
        {/* <div className="absolute inset-0 bg-grid opacity-30" /> */}
        
        {/* Accent Circles */}
        <div className="absolute top-30 left-0 w-[500px] h-[400px] bg-[#c16fff]/10 rounded-full blur-[100px]" />
        <div className="absolute  invisible md:visible  bottom-0 right-0 w-[500px] h-[400px] bg-[#c16fff]/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mb-14">
          <div className="text-center mb-5 ">
            <h1 className="text-4xl md:text-5xl font-bold font-bely text-[#9A62C6] mb-4 tracking-tight">
               Networks
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto font-Satoshi text-lg">
              Connect with me through these professional platforms for collaboration and communication.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Linkedin,
                name: 'LinkedIn',
                description: 'Professional Profile',
                href: 'https://linkedin.com/in/guna-murugesan',
                color: 'from-blue-400/20 to-blue-600/20',
                hoverColor: 'group-hover:text-blue-400'
              },
              {
                icon: Github,
                name: 'GitHub',
                description: 'Code Portfolio',
                href: 'https://github.com/gunaasin/',
                color: 'from-purple-500/20 to-purple-600/20',
                hoverColor: 'group-hover:text-purple-400'
              },
              {
                icon: Mail,
                name: 'Email',
                description: 'Direct Contact',
                href: 'mailto:guna.asin06@gmail.com',
                color: 'from-indigo-400/20 to-indigo-600/20',
                hoverColor: 'group-hover:text-indigo-400'
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-morphism rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-black/40">
                  <div className={`rounded-xl bg-gradient-to-br ${item.color} p-4 mb-4 w-14 h-14 flex items-center justify-center`}>
                    <item.icon className={`w-7 h-7 text-white transition-colors duration-300 ${item.hoverColor}`} />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 font-Satoshi">{item.description}</p>
                  <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="h-10 w-screen text-center z-30 absolute bottom-0" >
          <p className="text-gray-500 font-Satoshi">@ Guna Murugesan / 2025</p>
        </div>
      </div>
    );
}
