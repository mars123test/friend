import React from 'react';
import './LuckyRanking.css';

const LuckyRanking = () => {
  // 模拟数据
  const rankingData = [
    { id: 1, name: '用户1', avatar: '', luckValue: 88 },
    { id: 2, name: '用户2', avatar: '', luckValue: 76 },
    { id: 3, name: '用户3', avatar: '', luckValue: 65 },
    { id: 4, name: '用户4', avatar: '', luckValue: 54 },
    { id: 5, name: '用户5', avatar: '', luckValue: 43 },
  ];

  return (
    <div className="lucky-ranking">
      <h2>红包运气排行榜</h2>
      <div className="ranking-list">
        {rankingData.map((user, index) => (
          <div key={user.id} className="ranking-item">
            <span className="rank">{index + 1}</span>
            <img src={user.avatar || 'default-avatar.png'} alt={user.name} className="avatar" />
            <span className="name">{user.name}</span>
            <span className="luck-value">{user.luckValue}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuckyRanking;