import { useState, useEffect } from 'react';

export const TypingEffect = () => {
    const [text, setText] = useState("");
    const [wordIndex, setwordIndex] = useState(0);
    const [phase, setPhase] = useState("typing");
    let words = ["AI + Full Stack Developer", "Competitive Programmer", "Web Developer"];
    
    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout;
        if(phase === "typing"){
            timeout = setTimeout(() => {
                const nextText = currentWord.slice(0, text.length + 1);
                setText(nextText);
                if(nextText === currentWord){
                    setPhase("pausing");
                }
            }, 60);
        } else if(phase === "pausing"){
            timeout = setTimeout(() => {
                setPhase("deleting");
            }, 1200);
        }else if(phase === "deleting"){
            timeout = setTimeout(() => {
                const nextText = currentWord.slice(0, text.length - 1);
                setText(nextText);
                if(nextText === ""){
                    setwordIndex((prev) => (prev + 1) % words.length);
                    setPhase("typing");
                }
            }, 30);
        }
        return () => clearTimeout(timeout);
    }, [text, phase, wordIndex]);

  return (
    <>
      <span className='font-outfit font-black text-[var(--accent-purple)] uppercase tracking-wider'>{text}</span>
      <span className='inline-block w-1.5 h-4 ml-1 bg-[var(--accent-purple)] animate-pulse'></span>
    </>
  )
}

