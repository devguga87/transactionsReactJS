const formatDate = (data: Date): string =>
  Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(data));

export default formatDate;
