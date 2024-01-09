import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // APIからスレッド情報を取得するための関数
    const fetchThreads = async () => {
      try {
        const response = await axios.get('https://railway.bulletinboard.techtrain.dev/threads');
        setThreads(response.data); // 取得したデータをstateにセット
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };

    // ページがロードされた時にスレッド情報を取得
    fetchThreads();
  }, []); // 空のdependency arrayはコンポーネントがマウントされた時のみ実行することを意味する

  return (
    <div>
      <h1>掲示板</h1>
      <p>新着スレッド</p>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;