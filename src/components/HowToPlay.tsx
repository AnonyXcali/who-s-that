import React from 'react';

export default function HowToPlay() {
  return (
    <div
      className='how-to-play-container'
    >
      <div
        className='header-htp'
      >
        <p>Welcome to <strong>Who&apos;s That?</strong></p>
        <p>The ultimate guessing game where your wit meets the AI&apos;s clever responses! 🎉</p>
      </div>
     
      
      <div
        className='htp-mid'
      >
        <h2>Here&apos;s how it works:</h2>
      </div>

      <div
        className='htp-main'
      >
        <ul>
          <li>The AI secretly chooses a celebrity from a list of famous names.</li>
          <li>You have 20 yes-or-no questions to figure out who it is.</li>
          <li>Based on your questions, the AI will respond with:
            <ul>
              <li>Hot: You’re on the right track! 🔥</li>
              <li>Cold: Nope, try a different angle. ❄️</li>
            </ul>
          </li>
          <li>If you guess the celebrity correctly, the AI will crown you the winner with a glorious <strong>Crown</strong> 👑!</li>
          <li>Be careful, though—if you use up all 20 questions without guessing correctly, the game ends, and you lose.</li>
        </ul>
      </div>
     
     <div
      className='htp-footer'
     >
      <p>Sharpen your intuition, ask smart questions, and see if you can outsmart the AI. Ready to play <strong>Who&apos;s That?</strong> and claim your crown? Let’s go! 🕵️‍♂️👑</p>
     </div>

    </div>
  );
}