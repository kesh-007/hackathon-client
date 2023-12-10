const url= 'http://localhost:8000'

export const loginApi = async () => {
    try {
      const response = await fetch(`${url}/auth/google`, {
        method: "GET",
        headers: { 'Content-type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error('Network Error');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in loginApi:', error);
      throw error; 
    }
  }

