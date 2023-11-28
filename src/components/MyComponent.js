import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Spring Boot 백엔드 API 엔드포인트 URL
    const apiUrl = 'http://localhost:30010/api/data'; // 적절한 URL로 변경

    // Spring Boot 백엔드에서 데이터 가져오기
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // 빈 배열을 넘겨주면 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
