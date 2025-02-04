import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [text, setText] = useState('');
  const fullText = 'Banarasi Engineer';

  useEffect(() => {
    let isMounted = true;
    const writeText = async () => {
      while (isMounted) {
        for (let i = 0; i <= fullText.length; i++) {
          if (!isMounted) return;
          setText(fullText.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        for (let i = fullText.length; i >= 0; i--) {
          if (!isMounted) return;
          setText(fullText.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };
    writeText();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="fixed w-full bottom-0 bg-muted/50 h-12 flex items-center justify-center">
      <div className="w-full text-center text-gray-200">
        <p>
          Crafted with passion by{' '}
          <motion.span className="text-blue-500">
            {text}
          </motion.span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;