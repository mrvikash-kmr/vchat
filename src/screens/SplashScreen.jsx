import React from 'react';

const SplashScreen = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark flex items-center justify-center min-h-screen p-4">
      <div className="relative w-full max-w-[390px] h-[844px] bg-background-dark rounded-[55px] border-[8px] border-neutral-800 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-11 flex justify-between items-center px-8 z-50">
          <div className="text-white text-[15px] font-semibold">9:41</div>
          <div className="flex items-center space-x-1.5">
            <span className="material-symbols-rounded text-[18px] text-white">signal_cellular_alt</span>
            <span className="material-symbols-rounded text-[18px] text-white">wifi</span>
            <span className="material-symbols-rounded text-[20px] text-white rotate-90">battery_full</span>
          </div>
        </div>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-[20px] z-50"></div>
        <div className="w-full h-full relative vchat-gradient flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-orange-900/10 blur-[100px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-[-5%] left-[-10%] w-[250px] h-[250px] bg-neutral-800/30 blur-[80px] rounded-full"></div>
          <div className="flex flex-col items-center space-y-6 z-10">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-600/20 to-neutral-900/40 rounded-[32px] rounded-bl-lg border border-white/10 glass-panel logo-glow"></div>
              <span className="text-6xl font-black text-white italic relative -mt-1 select-none">
                v<span className="text-primary drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">.</span>
              </span>
            </div>
            <div className="text-center space-y-1">
              <h1 className="text-4xl font-extrabold tracking-tight text-white">vChat</h1>
              <p className="text-neutral-400 text-sm font-medium tracking-widest uppercase opacity-80">Premium Messaging</p>
            </div>
          </div>
          <div className="absolute bottom-20 w-full px-12 space-y-4">
            <div className="flex justify-center items-center gap-2">
              <span className="text-neutral-500 text-xs font-semibold tracking-wider uppercase">Connecting</span>
              <span className="flex gap-1">
                <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1 h-1 bg-primary rounded-full animate-bounce"></span>
              </span>
            </div>
            <div className="relative h-[4px] w-full bg-neutral-800/50 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/50 to-primary rounded-full animate-shimmer"></div>
              <div className="absolute top-0 left-1/3 w-8 h-full bg-white/20 blur-sm"></div>
            </div>
          </div>
          <div className="absolute bottom-12 flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-1.5 opacity-50">
              <span className="material-symbols-rounded text-white text-xs">lock</span>
              <span className="text-[10px] text-white font-medium uppercase tracking-widest">End-to-End Encrypted</span>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;