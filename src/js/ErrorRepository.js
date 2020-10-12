export default class ErrorRepository {
  constructor() {
    this.map = new Map();
    this.map.set('402', 'Необходима оплата');
    this.map.set('404', 'Не найдено');
    this.map.set('500', 'Внутренняя ошибка сервера');
    this.map.set('523', 'Источник недоступен');
    this.map.set('526', 'Недействительный сертификат SSL');
  }

  tranclate(key) {
    if (!this.map.has(key)) {
      return 'Unknown error';
    }
    return this.map.get(key);
  }
}
