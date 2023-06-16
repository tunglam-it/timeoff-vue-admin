export default {
   computed: {
      totalTimeOff(startDateTimeInput, endDateTimeInput) {
         const startDate = new Date(startDateTimeInput);
         const endDate = new Date(endDateTimeInput);
         const start = new Date(Date.parse(this.startDateTimeInput));
         const end = new Date(Date.parse(this.endDateTimeInput));
         const workStartTime = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 8, 0);
         const workEndTime = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 17, 30);
         let totalWorkTime = 0;
         for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            const workDate = new Date(date);
            const isWorkday = workDate.getDay() !== 0 && workDate.getDay() !== 6;
            if (isWorkday) {
               const workStart = workDate.getTime() === start.getTime() ? start : workDate.setHours(workStartTime.getHours(), workStartTime.getMinutes());
               const workEnd = workDate.getTime() === end.getTime() ? end : workDate.setHours(workEndTime.getHours(), workEndTime.getMinutes());
               if (workDate.getDay() !== 6 && workDate.getDay() !== 0) {
                  const workTime = Math.max(0, Math.min(workEnd, workEndTime) - Math.max(workStart, workStartTime) - 5400000); // 5400000 milliseconds = 1.5 hours
                  totalWorkTime += workTime;
               }
            }
         }
         const workHours = Math.floor(totalWorkTime / 3600000);
         const workMinutes = Math.floor((totalWorkTime % 3600000) / 60000);
         return `${workHours} giờ ${workMinutes} phút`;
      },
   },
}