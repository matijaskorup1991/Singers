'use strict';

const $ = (el) => document.querySelector(el);
const $$ = (el) => Array.from(document.querySelectorAll(el));
const $on = (el, ev, fn) =>
  Array.isArray(el)
    ? el.forEach((item) => $on(item, ev, fn))
    : el.addEventListener(ev, fn);

const singers = [
  {
    name: 'The Beatles',
    country: 'United Kingdom',
    period_active: { start: 1960, end: 1970 },
    genre: 'Rock / Pop',
  },
  {
    name: 'Elvis Presley',
    country: 'United States',
    period_active: { start: 1954, end: 1977 },
    genre: 'Rock and roll',
  },
  {
    name: 'Michael Jackson',
    country: 'United States',
    period_active: { start: 1964, end: 2009 },
    genre: 'Pop /Rock / Dance / Soul / R&B',
  },
  {
    name: 'Elton John',
    country: 'United Kingdom',
    period_active: { start: 1964, end: 'present' },
    genre: 'Pop /Rock',
  },
  {
    name: 'Madonna',
    country: 'United States',
    period_active: { start: 1979, end: 'present' },
    genre: 'Pop / Dance / Electronica',
  },
  {
    name: 'LedZeppelin',
    country: 'United Kingdom',
    period_active: { start: 1968, end: 1980 },
    genre: 'Hard rock / Blues rock / Folk rock',
  },
  {
    name: 'Rihanna',
    country: 'United States',
    period_active: { start: 2005, end: 'present' },
    genre: 'R&B / Pop / Dance / Hip-hop',
  },
  {
    name: 'Pink Floyd',
    country: 'United Kingdom',
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: 'Progressive rock / Psychedelic rock',
  },
];

//DEFAULT

singers.map((el) => {
  $('.table-body').innerHTML += `
    <tr>
    <td>${el.name}</td>
    <td>${el.country}</td>
    <td>${el.period_active.start} ${el.period_active.end}</td>
    <td>${el.genre}</td>
    </tr>
    `;
});

function sortedSingers(arr) {
  return arr.map((el) => {
    $('.table-body').innerHTML += `<tr>
      <td>${el.name}</td>
      <td>${el.country}</td>
      <td>${el.period_active.start} ${el.period_active.end}</td>
      <td>${el.genre}</td>
      </tr>`;
  });
}

$on($$('.button'), 'click', (e) => {
  $('.table-body').innerHTML = '';

  if (e.target.innerHTML == 'Name') {
    let newArray = singers.sort((a, b) =>
      a.name.split(' ')[0] < b.name.split(' ')[0] ? -1 : 1
    );
    sortedSingers(newArray);
  }
  if (e.target.innerHTML == 'Country') {
    let newArray = singers.sort((a, b) => (a.country < b.country ? -1 : 1));
    sortedSingers(newArray);
  }
  if (e.target.innerHTML == 'Period Active') {
    let newArray = singers.sort(
      (a, b) => a.period_active.start - b.period_active.start
    );
    sortedSingers(newArray);
  }
  if (e.target.innerHTML == 'Genre') {
    let newArray = singers.sort((a, b) => (a.genre < b.genre ? -1 : 1));
    sortedSingers(newArray);
  }
});
