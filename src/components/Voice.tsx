import React from 'react'

const VoicePitchGraph = () => (
  <div className="flex items-center justify-center  w-full gap-1 ">
    <style>
      {`
            @keyframes pitch {
                0%, 40%, 100% { transform: scaleY(0.4); }
                20% { transform: scaleY(1.0); }
            }
            .pitch-bar {
                display: inline-block;
                width: 4px;
                background-color: #F97316; /* orange-500 */
                border-radius: 4px;
                animation: pitch 1.2s infinite ease-in-out;
            }
            `}
    </style>
    {/* These divs are the animated bars of the graph */}
    <div className="pitch-bar" style={{ height: '10px', animationDelay: '-1.1s' }}></div>
    <div className="pitch-bar" style={{ height: '25px', animationDelay: '-1.0s' }}></div>
    <div className="pitch-bar" style={{ height: '40px', animationDelay: '-0.9s' }}></div>
    <div className="pitch-bar" style={{ height: '30px', animationDelay: '-0.8s' }}></div>
    <div className="pitch-bar" style={{ height: '15px', animationDelay: '-0.7s' }}></div>
    <div className="pitch-bar" style={{ height: '25px', animationDelay: '-0.6s' }}></div>
    <div className="pitch-bar" style={{ height: '10px', animationDelay: '-0.5s' }}></div>
    <div className="pitch-bar" style={{ height: '10px', animationDelay: '-1.1s' }}></div>
  </div>
);

export default VoicePitchGraph;