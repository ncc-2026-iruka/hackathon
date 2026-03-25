const STORAGE_KEY = 'furumachi_map_stamp_rally_v1';

const spots = [
  {
    id: 'furumachi-rufuru',
    name: '古町ルフル',
    area: '散歩',
    lat: 37.9199,
    lng: 139.0425,
    description: 'スタンプラリーのスタート地点。まずはここで全体の流れを確認して古町めぐりを始めよう。',
    highlight: '街歩きの起点として使いやすく、古町散策の入口にぴったり。',
    address: '新潟市中央区古町通7番町1010',
    hours: '8:30〜22:00（目安）',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Furumachi_REFURU%2C_NEXT21%2C_Masaya-koji_Avenue_and_Furumachi-dori_Street%2C_Niigata_City%2C_August2023.jpg',
    rewardText: '冒険のはじまりスタンプ'
  },
  {
    id: 'furumachi-shotengai',
    name: '古町通商店街',
    area: '散歩',
    lat: 37.9193,
    lng: 139.0438,
    description: '古町らしい雰囲気を味わえる商店街エリア。老舗や昔ながらの街並みを感じながら歩ける。',
    highlight: 'レトロ感や歴史を感じられて、古町らしさが強い定番スポット。',
    address: '新潟市中央区古町通周辺',
    hours: '店舗により異なる',
    image: 'https://niigata-furumachi.jp/wp-content/uploads/2013/02/furu60000.jpg',
    rewardText: 'レトロまち歩きスタンプ'
  },
  {
    id: 'hakusan-shrine',
    name: '白山神社',
    area: '散歩',
    lat: 37.9147,
    lng: 139.0368,
    description: '落ち着いた雰囲気の中で文化と季節を感じられる、新潟を代表する神社スポット。',
    highlight: '街なか散策に静けさを加えられる、文化系のアクセントになる場所。',
    address: '新潟市中央区一番堀通町1-1',
    hours: '終日参拝可',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Hakusan_Shrine_%28Niigata_City%29_Haiden.jpg',
    rewardText: '願いごとスタンプ'
  },
  {
    id: 'yasuragi-tei',
    name: 'やすらぎ堤',
    area: '散歩',
    lat: 37.9180,
    lng: 139.0505,
    description: '信濃川沿いを歩きながら景色を楽しめる、古町散策の中で一息つけるスポット。',
    highlight: '川沿いの開放感があり、ゴール前の気分転換や写真にも向いている。',
    address: '新潟市中央区信濃川沿い',
    hours: '終日',
    image: 'https://niigata-kankou.or.jp/image/rendering/attraction_image/8419/trim.900/3/2?v=0ab03623a8ec74c6c8a8001c24c35367e7e2289d',
    rewardText: '川辺さんぽスタンプ'
  },
  {
    id: 'sankichiya-nishibori',
    name: '三吉屋 西堀本店',
    area: 'ラーメン',
    lat: 37.9200,
    lng: 139.0389,
    description: 'あっさり醤油ラーメンが人気の新潟ラーメンの老舗。',
    highlight: '透き通ったスープと細麺が特徴の昔ながらの一杯。',
    address: '新潟県新潟市中央区西堀通5-829',
    hours: '11:00〜16:00（目安）',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=1200&q=80',
    rewardText: 'にいがたスタンプ'
  },
  {
    id: 'tonkatsu-taro',
    name: 'とんかつ太郎',
    area: '新潟グルメ',
    lat: 37.9202,
    lng: 139.0428,
    description: '新潟名物のタレカツ丼で有名な老舗とんかつ店。',
    highlight: '甘辛いタレが染みたカツは古町グルメの定番。',
    address: '新潟県新潟市中央区古町通6番町973',
    hours: '11:30〜14:30 / 17:00〜20:00（目安）',
    image: 'https://www.nvcb.or.jp/lsc/upfile/articleDetail/0000/2444/2444_1_m.jpg',
    rewardText: 'にいがたスタンプ'
  },
  {
    id: 'hari-ito',
    name: 'はり糸',
    area: '新潟グルメ',
    lat: 37.91992260619637,
    lng: 139.04353316268077,
    description: '1873年（明治6年）創業の新潟・古町の老舗菓子店',
    highlight: '代々受け継がれる手仕事で焼き上げるしっとりカステラがおすすめ',
    address: '新潟県新潟市中央区古町通5番町618',
    hours: '10:00〜18:00（目安）',
    image: 'https://hariito1873.com/assets/img/mainvisual_pc.jpg',
    rewardText: 'にいがたスタンプ'
  },
  {
    id: 'niigata-ogawaya',
    name: '新潟小川屋',
    area: '新潟グルメ',
    lat: 37.921229709701855,
    lng: 139.0440194304041,
    description: '鮭の味噌漬けなどで知られる新潟の老舗食品店。',
    highlight: 'お土産にもぴったりな伝統の味を楽しめる。',
    address: '新潟県新潟市中央区古町通5番町611',
    hours: '9:00〜18:00（目安）',
    image: 'https://niigata-furumachi.jp/wp-content/uploads/2013/03/05_001_001.png',
    rewardText: 'にいがたスタンプ'
  },
  {
    id: 'goro-furumati',
    name: '五郎古町店',
    area: '酒',
    lat: 37.924527,
    lng: 139.045638,
    description: '地酒の種類が豊富な飲み屋。',
    highlight: '採れたての鮮度抜群の食材を楽しめる',
    address: '新潟県新潟市中央区古町通8番町1446',
    hours: '17:30〜01:00（目安）',
    image: 'https://tblg.k-img.com/restaurant/images/Rvw/108908/640x640_rect_108908471.jpg',
    rewardText: '五郎スタンプ'
  },
  {
    id: 'furumatinene',
    name: '古町寧々',
    area: '酒',
    lat: 37.924723,
    lng: 139.045284,
    description: '地酒の飲み比べができる定番店。',
    highlight: '朝捕れ鮮魚と契約農家の野菜を提供',
    address: '新潟県新潟市中央区古町通8番町1492',
    hours: '17:00〜23:00（目安）',
    image: 'https://tblg.k-img.com/restaurant/images/Rvw/4010/4010963.jpg',
    rewardText: '寧々スタンプ'
  },
  {
    id: 'gin',
    name: '吟',
    area: '酒',
    lat: 37.925309,
    lng: 139.046408,
    description: '呑み方にこだわる通向けの店',
    highlight: '酒や地酒の個性を感じて楽しめる',
    address: '新潟県新潟市中央区古町通7番町1004-2',
    hours: '17:00〜00:00（目安）',
    image: 'https://draftbeer.jp/wp-content/uploads/2024/08/PXL_20240805_083501790.jpg',
    rewardText: '吟スタンプ'
  },
  {
    id: 'hickory03travelers',
    name: 'hickory03travelers',
    area: '雑貨',
    lat: 37.91744836138854,
    lng: 139.04189530357252,
    description: '「日常を楽しもう」をコンセプトに新潟の名品や浮き星などを取りそろえた雑貨店',
    highlight: 'クリエイティブな空間で新しい発見ができる。',
    address: '新潟県新潟市中央区古町通3番町556',
    hours: '11:00〜18:00（目安）',
    image: 'https://arekore000.com/wp/wp-content/themes/arekore/images/topShop_img_h3.jpg',
    rewardText: 'にいがたスタンプ'
  },
  {
    id: 'chamonix-furumachi',
    name: 'シャモニー 古町店',
    area: 'カフェ・喫茶店',
    lat: 37.91932137712597,
    lng: 139.043953550752,
    description: '昔ながらの雰囲気が残る喫茶店で、ゆったりとした時間を楽しめるスポット。',
    highlight: 'レトロな空間で味わうコーヒーと軽食が魅力。',
    address: '新潟県新潟市中央区古町通5番町591',
    hours: '10:00〜18:00（目安）',
    image: 'http://ful-5.net/wp/wp-content/uploads/2014/04/chamonix_01.jpg',
    rewardText: 'カフェ巡りスタンプ'
  },
  {
    id: 'kaffa-palm',
    name: 'Kaffaパルム',
    area: 'カフェ・喫茶店',
    lat: 37.92176371191056,
    lng: 139.0448044328175,
    description: '新潟市中央区古町で半世紀続く老舗喫茶店。',
    highlight: 'こだわりのブレンドと静かな時間が魅力。',
    address: '新潟県新潟市中央区古町通6番町987',
    hours: '11:00〜19:00（目安）',
    image: 'https://things-niigata.jp/wp-content/uploads/2025/03/kaffa_04.jpg',
    rewardText: 'カフェ巡りスタンプ'
  },
  {
    id: 'new-furumachi-cafe',
    name: '喫茶ニュー古町',
    area: 'カフェ・喫茶店',
    lat: 37.92538652217045,
    lng: 139.046235362406,
    description: '古町花街に誕生。夜だけ開くレトロ喫茶。',
    highlight: '28年間ラウンジとして営業し、大切に使い続けられてきた店舗を喫茶店にリニューアル。',
    address: '新潟県新潟市中央区東堀通9番町1407-17',
    hours: '10:00〜17:00（目安）',
    image: 'https://tjniigata.jp/assets/uploads/2025/10/e0cf4ecde8d902c0ae6846ccf9d2a9f7-760x507.jpg',
    rewardText: 'カフェ巡りスタンプ'
  },
  {
    id: 'san-nagaya',
    name: '上古町の百年長屋SAN',
    area: 'カフェ・喫茶店',
    lat: 37.91781271430409,
    lng: 139.0420936267671,
    description: '築100年の古民家を再活用した 上古町を体験する複合施設。',
    highlight: '二階の空間では勉強や作業ができる。',
    address: '新潟県新潟市中央区古町通3番町653',
    hours: '店舗により異なる',
    image: 'https://storage.googleapis.com/teamplace-official-bucket/57aFfBblob',
    rewardText: 'カフェ巡りスタンプ'
  },
  {
    id: 'sugarcoat',
    name: 'SugarCOAT',
    area: 'カフェ・喫茶店',
    lat: 37.91941306582003,
    lng: 139.0420471220875,
    description: '様々な種類の紅茶や手作りお菓子が楽しめる。',
    highlight: '英国・仏国を中心に仕入れをした紅茶と手作りのお菓子をご用意。',
    address: '新潟市中央区西堀通3-802-3',
    hours: '11:00〜18:00（目安）',
    image: 'https://things-niigata.jp/wp-content/uploads/2020/04/sugercoat_05.jpg',
    rewardText: 'カフェ巡りスタンプ'
  },
  {
    id: 'kirei',
    name: '台湾 キレイ 茶芸大使館',
    area: 'カフェ・喫茶店',
    lat: 37.9164,
    lng: 139.0486,
    description: 'パスポートなしで台湾気分が楽しめる喫茶店。',
    highlight: '台湾旅行をされた方が懐かしんで訪れたり、台湾旅行を予定されている方が来店することも。本場の味が楽しめるお店。',
    address: '新潟市中央区東堀通4番町452',
    hours: '11:00〜19:00',
    image: 'https://niigata-kankou.or.jp/image/rendering/blog_paragraph_column_image/9211/keep/640?v=0ff6af5a0254618a7b50b504c98343ec076ed0d1',
    rewardText: '映えスタンプ'
  },
  {
    id: 'goal-counter',
    name: '景品交換所',
    area: 'ゴール',
    lat: 37.9190,
    lng: 139.0429,
    description: '全スポットを回ったあとに訪れるゴール地点。達成画面の提示で特典と交換する想定。',
    highlight: 'ラストに達成感を演出する、締めのスポット。',
    address: '古町ルフル周辺イベントカウンター想定',
    hours: '10:00〜18:00（想定）',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    rewardText: '完全制覇スタンプ'
  }
];

const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const achievementMessage = document.getElementById('achievementMessage');
const rewardBox = document.getElementById('rewardBox');
const messageBox = document.getElementById('messageBox');
const locateButton = document.getElementById('locateButton');
const resetButton = document.getElementById('resetButton');
const fitButton = document.getElementById('fitButton');
const areaFilter = document.getElementById('areaFilter');
const spotList = document.getElementById('spotList');
const goButton = document.getElementById('goButton');
const stampButton = document.getElementById('stampButton');

const detailArea = document.getElementById('detailArea');
const detailName = document.getElementById('detailName');
const detailStatus = document.getElementById('detailStatus');
const detailDescription = document.getElementById('detailDescription');
const detailImage = document.getElementById('detailImage');
const detailHighlight = document.getElementById('detailHighlight');
const detailAddress = document.getElementById('detailAddress');
const detailHours = document.getElementById('detailHours');
const detailDistance = document.getElementById('detailDistance');

let stampedIds = loadStamps();
let selectedSpotId = spots[0].id;
let userLocation = null;
let userMarker = null;
const markers = {};

const map = L.map('map', { zoomControl: true }).setView([37.9187, 139.0435], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function loadStamps() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveStamps() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stampedIds));
}

function createIcon(color) {
  return L.divIcon({
    className: '',
    html: `<div style="width:18px;height:18px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 3px 10px rgba(0,0,0,0.25);"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10]
  });
}

function markerColorForSpot(spot) {
  if (spot.area === 'ゴール') return '#f59e0b';
  return stampedIds.includes(spot.id) ? '#16a34a' : '#e75b90';
}

function refreshMarkers() {
  Object.values(markers).forEach((marker) => map.removeLayer(marker));
  Object.keys(markers).forEach((key) => delete markers[key]);

  const filteredSpots = getFilteredSpots();

  filteredSpots.forEach((spot) => {
    const marker = L.marker([spot.lat, spot.lng], { icon: createIcon(markerColorForSpot(spot)) }).addTo(map);
    marker.bindPopup(`
      <div class="popup-title">${spot.name}</div>
      <div class="popup-text">${spot.description}</div>
      <button class="popup-btn" onclick="selectSpot('${spot.id}', true)">詳細を見る</button>
    `);
    marker.on('click', () => selectSpot(spot.id, false));
    markers[spot.id] = marker;
  });
}

function getFilteredSpots() {
  const value = areaFilter.value;
  if (value === 'all') return spots;
  return spots.filter((spot) => spot.area === value);
}

function setMapBounds() {
  const filtered = getFilteredSpots();
  const latlngs = filtered.map((spot) => [spot.lat, spot.lng]);

  if (userLocation) latlngs.push([userLocation.lat, userLocation.lng]);

  if (latlngs.length > 0) {
    map.fitBounds(latlngs, { padding: [40, 40] });
  }
}

function formatDistance(from, to) {
  const R = 6371000;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(to.lat - from.lat);
  const dLng = toRad(to.lng - from.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(from.lat)) * Math.cos(toRad(to.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  if (distance < 1000) return Math.round(distance) + ' m';
  return (distance / 1000).toFixed(2) + ' km';
}

function renderProgress() {
  const total = spots.length;
  const count = stampedIds.length;
  const percent = Math.round((count / total) * 100);

  progressText.textContent = `${count} / ${total}`;
  progressBar.style.width = percent + '%';

  if (count === total) {
    achievementMessage.textContent = 'おめでとう！全スポット制覇で「古町マスター」達成！';
    rewardBox.className = 'reward unlocked';
    rewardBox.innerHTML = '<strong>古町マスター認定！</strong><br>全スタンプ達成！この画面を景品交換所で見せると、特典を受け取れる想定です。';
  } else {
    achievementMessage.textContent = 'まずは地図から行きたいスポットを探そう。';
    rewardBox.className = 'reward';
    rewardBox.textContent = 'まだロック中です。全スポットを巡ると、ここに特典画面が表示されます。';
  }
}

function renderSpotList() {
  const filtered = getFilteredSpots();
  spotList.innerHTML = '';

  filtered.forEach((spot) => {
    const done = stampedIds.includes(spot.id);
    const active = selectedSpotId === spot.id;

    const card = document.createElement('div');
    card.className = 'spot-item' + (active ? ' active' : '');
    card.innerHTML = `
      <div class="detail-title-row">
        <div>
          <div class="area">${spot.area}</div>
          <h3>${spot.name}</h3>
        </div>
        <div class="status ${done ? 'done' : 'todo'}">${done ? '取得済み' : '未取得'}</div>
      </div>
      <p>${spot.description}</p>
      <div class="small" style="margin-top: 8px;">${spot.address}</div>
    `;

    const buttons = document.createElement('div');
    buttons.className = 'spot-buttons';

    const viewButton = document.createElement('button');
    viewButton.className = 'btn sub';
    viewButton.textContent = '詳細';
    viewButton.addEventListener('click', () => selectSpot(spot.id, true));

    const getButton = document.createElement('button');
    getButton.className = 'btn';
    getButton.textContent = done ? '取得済み' : '取得';
    getButton.disabled = done;

    if (done) {
      getButton.style.opacity = '0.6';
      getButton.style.cursor = 'default';
    }

    getButton.addEventListener('click', () => stampSpot(spot.id));

    buttons.appendChild(viewButton);
    buttons.appendChild(getButton);
    card.appendChild(buttons);
    spotList.appendChild(card);
  });
}

function renderDetail() {
  const spot = spots.find((item) => item.id === selectedSpotId);
  if (!spot) return;

  const done = stampedIds.includes(spot.id);

  detailArea.textContent = spot.area;
  detailName.textContent = spot.name;
  detailStatus.textContent = done ? '取得済み' : '未取得';
  detailStatus.className = 'status ' + (done ? 'done' : 'todo');
  detailDescription.textContent = spot.description;
  detailImage.src = spot.image;
  detailHighlight.textContent = spot.highlight;
  detailAddress.textContent = spot.address;
  detailHours.textContent = spot.hours;
  detailDistance.textContent = userLocation
    ? formatDistance(userLocation, { lat: spot.lat, lng: spot.lng })
    : '現在地を取得すると表示します。';

  stampButton.textContent = done ? 'このスポットは取得済み' : 'このスポットでスタンプ取得';
  stampButton.disabled = done;
  stampButton.style.opacity = done ? '0.6' : '1';
  stampButton.style.cursor = done ? 'default' : 'pointer';
}

function renderAll() {
  renderProgress();
  refreshMarkers();
  renderSpotList();
  renderDetail();
  renderStampBoard();
}

function stampSpot(spotId) {
  const spot = spots.find((item) => item.id === spotId);
  if (!spot) return;

  if (stampedIds.includes(spotId)) {
    messageBox.textContent = `「${spot.name}」は取得済みだよ。`;
    return;
  }

  stampedIds.push(spotId);
  saveStamps();
  selectedSpotId = spotId;
  messageBox.textContent = `「${spot.name}」のスタンプをゲット！ ${spot.rewardText}`;
  renderAll();
  animateStampCell(spotId);
}

function openNavigation(spot) {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}`;
  window.open(url, '_blank');
}

function selectSpot(spotId, panToMarker = true) {
  selectedSpotId = spotId;
  renderSpotList();
  renderDetail();

  const marker = markers[spotId];
  const spot = spots.find((item) => item.id === spotId);

  if (panToMarker && marker) {
    map.setView([spot.lat, spot.lng], 16);
    marker.openPopup();
  }

  messageBox.textContent = `「${spot.name}」の概要を表示中。向かう場合は「ここへ向かう」を押してね。`;
}

window.selectSpot = selectSpot;

locateButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    messageBox.textContent = 'このブラウザは現在地取得に対応していないみたい。';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      if (userMarker) {
        userMarker.setLatLng([userLocation.lat, userLocation.lng]);
      } else {
        userMarker = L.circleMarker([userLocation.lat, userLocation.lng], {
          radius: 8,
          color: '#2563eb',
          fillColor: '#2563eb',
          fillOpacity: 1
        }).addTo(map).bindPopup('現在地');
      }

      map.setView([userLocation.lat, userLocation.lng], 15);
      renderDetail();
      messageBox.textContent = '現在地を取得したよ。スポットまでの距離も表示できるようになったよ。';
    },
    () => {
      messageBox.textContent = '現在地を取得できなかったよ。位置情報の許可を確認してみてね。';
    }
  );
});

resetButton.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY);
  stampedIds = [];
  messageBox.textContent = 'スタンプをリセットしたよ。最初から遊べる状態に戻ったよ。';
  renderAll();
});

fitButton.addEventListener('click', () => {
  setMapBounds();
});

areaFilter.addEventListener('change', () => {
  const filtered = getFilteredSpots();

  if (!filtered.some((spot) => spot.id === selectedSpotId) && filtered.length > 0) {
    selectedSpotId = filtered[0].id;
  }

  renderAll();
  setMapBounds();
});

goButton.addEventListener('click', () => {
  const spot = spots.find((item) => item.id === selectedSpotId);

  if (!spot) {
    messageBox.textContent = '先にスポットを選んでね。';
    return;
  }

  openNavigation(spot);
  messageBox.textContent = `「${spot.name}」へのルート案内を開いたよ。`;
});

stampButton.addEventListener('click', () => {
  if (!selectedSpotId) {
    messageBox.textContent = '先にスポットを選んでね。';
    return;
  }

  stampSpot(selectedSpotId);
});

function checkQueryScan() {
  const params = new URLSearchParams(window.location.search);
  const scanId = params.get('scan');

  if (!scanId) return;

  const exists = spots.some((spot) => spot.id === scanId);
  if (!exists) return;

  selectSpot(scanId, true);
  stampSpot(scanId);

  params.delete('scan');
  const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
  history.replaceState({}, '', newUrl);
}

function renderStampBoard() {
  const grid = document.getElementById('stampGrid');
  const countEl = document.getElementById('stampBoardCount');
  const totalEl = document.getElementById('stampBoardTotal');

  countEl.textContent = stampedIds.length;
  totalEl.textContent = spots.length;

  if (grid.children.length === 0) {
    spots.forEach((spot) => {
      const cell = document.createElement('div');
      cell.className = 'stamp-cell';
      cell.dataset.spotId = spot.id;
      cell.title = spot.name;
      cell.addEventListener('click', () => selectSpot(spot.id, true));

      const frame = document.createElement('div');
      frame.className = 'stamp-frame';
      frame.id = `stamp-frame-${spot.id}`;

      const img = document.createElement('img');
      img.alt = spot.name;
      img.src = spot.image;
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });

      const overlay = document.createElement('div');
      overlay.className = 'stamp-overlay';
      overlay.innerHTML = `<span class="stamp-overlay-icon">🏮</span>`;

      const ink = document.createElement('div');
      ink.className = 'stamp-ink';
      ink.innerHTML = `<div class="stamp-ink-circle"><span class="stamp-ink-check">✓</span></div>`;

      frame.appendChild(img);
      frame.appendChild(overlay);
      frame.appendChild(ink);

      const name = document.createElement('div');
      name.className = 'stamp-name';
      name.textContent = spot.name;

      const areaTag = document.createElement('div');
      areaTag.className = 'stamp-area-tag';
      areaTag.textContent = spot.area;

      cell.appendChild(frame);
      cell.appendChild(name);
      cell.appendChild(areaTag);
      grid.appendChild(cell);
    });
  }

  spots.forEach((spot) => {
    const frame = document.getElementById(`stamp-frame-${spot.id}`);
    if (!frame) return;

    if (stampedIds.includes(spot.id)) {
      frame.classList.add('stamped');
    } else {
      frame.classList.remove('stamped');
    }
  });
}

function animateStampCell(spotId) {
  const frame = document.getElementById(`stamp-frame-${spotId}`);
  if (!frame) return;

  frame.classList.remove('stamp-anim');
  void frame.offsetWidth;
  frame.classList.add('stamp-anim');
  frame.addEventListener('animationend', () => frame.classList.remove('stamp-anim'), { once: true });
}

renderAll();
setMapBounds();
selectSpot(selectedSpotId, false);
checkQueryScan();