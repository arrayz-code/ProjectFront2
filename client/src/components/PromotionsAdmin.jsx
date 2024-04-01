
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/promotions'
});

function Promotions() {
}

export default Promotions;
