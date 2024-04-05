class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    // Método para registrar un evento y su manejador
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    // Método para emitir un evento y llamar a los manejadores asociados
    emit(event, data) {
      if (this.events[event]) {
        this.events[event].forEach(listener => {
          listener(data);
        });
      }
    }
  }
  
  const eventEmitter = new EventEmitter();
  export default eventEmitter;
  