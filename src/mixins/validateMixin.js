export default {
   methods: {
      /**
       * check validate required
       * @param value 
       * @returns 
       */
      validateInput(value) {
         if (!value) {
            return 'This field is required';
         }
         return true
      },

      /***
    * Validate email
    */
      validateEmail(value) {
         // if the field is empty
         if (!value) {
            return 'This field is required';
         }
         // if the field is not a valid email
         const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
         if (!regex.test(value)) {
            return 'This field must be a valid email';
         }
         // All is good
         return true;
      },

      /**
       * check confirm password
       * @param value 
       * @returns 
       */
      validateConfirmPassword(value) {
         if (!value) {
            return 'This field is required';
         }
         return true
      }
   }
}