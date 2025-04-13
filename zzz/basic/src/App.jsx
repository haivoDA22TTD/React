import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Naruto Uzumaki - Tướng Quân Hokage
        </motion.h1>
      </header>

      <section className="bio">
  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Tiểu Sử
  </motion.h2>
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <img src="/img/naruto.png" alt="Naruto" className="character-image" />
    <p>
      Naruto Uzumaki là một ninja đầy khát vọng, mong muốn trở thành Hokage - người mạnh nhất trong làng. Mặc dù có xuất thân là một đứa trẻ bị cô lập vì chứa đựng Kyubi (Cửu Vĩ), nhưng Naruto đã không ngừng nỗ lực, vượt qua mọi thử thách để trở thành một anh hùng vĩ đại.
    </p>
  </motion.div>
</section>


      {/* Kỹ năng */}
      <section className="skills">
  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Kỹ Năng
  </motion.h2>
  <motion.ul
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <li>Rasengan <img src="/img/rasengan.png" alt="Rasengan" className="skill-image" /></li>
    <li>Chidori (Sau khi học từ Kakashi)</li>
    <li>Shadow Clone Jutsu</li>
    <li>Kurama Chakra Mode</li>
  </motion.ul>
</section>


      {/* Linh thú */}
      <section className="summons">
  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Linh Thú
  </motion.h2>
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <img src="/img/kyubi.png" alt="" className="summon-image" />
    <p>
      Naruto sở hữu sức mạnh của **Kyubi (Cửu Vĩ)**, linh thú mạnh mẽ nhất trong thế giới ninja, giúp anh có được một sức mạnh vô cùng lớn trong các trận chiến.
    </p>
  </motion.div>
</section>


      {/* Hậu truyện */}
      <section className="epilogue">
  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Hậu Truyện
  </motion.h2>
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <img src="/img/hokage.png" alt="Naruto Hokage" className="epilogue-image" />
    <p>
      Sau cuộc chiến ninja vĩ đại, Naruto trở thành Hokage Thứ Bảy và bắt đầu gia đình với Hinata Hyuga. Câu chuyện về Naruto tiếp tục trong "Boruto: Naruto Next Generations", nơi con trai của anh, Boruto Uzumaki, sẽ đối mặt với những thử thách mới.
    </p>
  </motion.div>
</section>

    </div>
  );
}

export default App;
