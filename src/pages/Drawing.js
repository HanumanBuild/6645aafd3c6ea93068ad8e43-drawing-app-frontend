import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import axiosInstance from '../api/axiosInstance';

const Drawing = () => {
  const [title, setTitle] = useState('');
  const canvasRef = useRef(null);

  const handleSave = async () => {
    if (!canvasRef.current) return;
    const data = canvasRef.current.getSaveData();
    try {
      await axiosInstance.post(
        '/api/drawings',
        { title, data },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert('Drawing saved');
    } catch (error) {
      alert('Failed to save drawing');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="mb-4 w-full max-w-sm">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <CanvasDraw ref={canvasRef} className="border border-gray-300 rounded" />
      <button onClick={handleSave} className="mt-4 bg-blue-500 text-white p-2 rounded">Save Drawing</button>
    </div>
  );
};

export default Drawing;