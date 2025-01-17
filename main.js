document.getElementById('calculate-btn').addEventListener('click', () => {
      const timeIn = document.getElementById('time-in').value;
      const timeOut = document.getElementById('time-out').value;
      
      if (!timeIn || !timeOut) {
        alert('Please enter both time in and time out');
        return;
      }
      
      const [inHours, inMinutes] = timeIn.split(':').map(Number);
      const [outHours, outMinutes] = timeOut.split(':').map(Number);
      
      const totalMinutesIn = inHours * 60 + inMinutes;
      const totalMinutesOut = outHours * 60 + outMinutes;
      
      let totalMinutes = totalMinutesOut - totalMinutesIn;
      
      if (totalMinutes < 0) {
        totalMinutes += 24 * 60; // Handle overnight stays
      }
      
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const price = (totalMinutes * 0.75).toFixed(2);
      
      const timeSpent = `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
      document.getElementById('result').innerHTML = `
        Total Time: ${timeSpent}<br>
        Total Price: $${price}
      `;
    });
