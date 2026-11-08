window.__VMS_HASH0=location.hash; /* remembered before the router rewrites the URL */
// ================= F1 =================
const F1_LINEUPS = window.VMS_LINEUPS.f1;

const F1_STANDINGS = {
  drivers: [
    {name:'Nick', code:'MD1', team:'Scuderia Ferrari', pts:301, wins:0, pods:0, dnf:0, pos:1, gap:'0', form:['W', 'W', 'W']},
    {name:'Lory', code:'MD2', team:'Richard Mille LM Motorsport F1', pts:190, wins:0, pods:0, dnf:0, pos:2, gap:'-111', form:['2', '4', '6']},
    {name:'Douzy', code:'—', team:'Richard Mille LM Motorsport F1', pts:116, wins:0, pods:0, dnf:0, pos:3, gap:'-185', form:[]},
    {name:'Noel', code:'—', team:'Mercedes-AMG', pts:67, wins:0, pods:0, dnf:0, pos:4, gap:'-234', form:[]},
    {name:'Tenbreakes', code:'—', team:'Vanguard Sabre Motorsport', pts:46, wins:0, pods:0, dnf:0, pos:5, gap:'-255', form:[]},
    {name:'Sly', code:'MD1', team:'Sahara Force India F1 Team', pts:45, wins:0, pods:0, dnf:0, pos:6, gap:'-256', form:['3', 'DNF', '3']},
    {name:'GKF', code:'MD1', team:'Vodafone McLaren', pts:43, wins:0, pods:0, dnf:0, pos:7, gap:'-258', form:['6', '5']},
    {name:'Ageftyg2', code:'MD2', team:'Scuderia Ferrari', pts:41, wins:0, pods:0, dnf:0, pos:8, gap:'-260', form:['DNP', '9', 'DNF']},
    {name:'Joshua', code:'—', team:'Aero Apex Racing', pts:40, wins:0, pods:0, dnf:0, pos:9, gap:'-261', form:[]},
    {name:'Dovantae', code:'—', team:'Aero Apex Racing', pts:37, wins:0, pods:0, dnf:0, pos:10, gap:'-264', form:[]},
    {name:'Unironically', code:'MD1', team:'Mercedes-AMG', pts:36, wins:0, pods:0, dnf:0, pos:11, gap:'-265', form:['DNP', '8', '4']},
    {name:'Arin', code:'MD1', team:'Aero Apex Racing', pts:34, wins:0, pods:0, dnf:0, pos:12, gap:'-267', form:['5', '6', '5']},
    {name:'Theo', code:'MD2', team:'Vodafone McLaren', pts:28, wins:0, pods:0, dnf:0, pos:13, gap:'-273', form:['DNP', '10', 'DNP']},
    {name:'ShadowRex', code:'MD1', team:'Tarigy\'s Motorsport Team F1', pts:28, wins:0, pods:0, dnf:0, pos:14, gap:'-273', form:[]},
    {name:'Michael', code:'—', team:'Mercedes-AMG', pts:26, wins:0, pods:0, dnf:0, pos:15, gap:'-275', form:[]},
    {name:'Vitality', code:'RD1', team:'Scuderia Ferrari', pts:24, wins:0, pods:0, dnf:0, pos:16, gap:'-277', form:['DNF', 'DNP', 'DNP']},
    {name:'Daih_V', code:'MD1', team:'Vanguard Sabre Motorsport', pts:24, wins:0, pods:0, dnf:0, pos:17, gap:'-277', form:['DNP', 'DNP', 'DNP']},
    {name:'Yokesecapo', code:'MD1', team:'Scuderia Ferrari', pts:24, wins:0, pods:0, dnf:0, pos:18, gap:'-277', form:['DNP', '7', 'DNF']},
    {name:'Sun_rise', code:'MD1', team:'Hertz Porsche', pts:22, wins:0, pods:0, dnf:0, pos:19, gap:'-279', form:['DNP', 'DNP', 'DNP']},
    {name:'Sckibles', code:'MD2', team:'GlitchGP F1 Team', pts:20, wins:0, pods:0, dnf:0, pos:20, gap:'-281', form:['DNP', 'DNP', 'DNP']},
    {name:'Nath II', code:'—', team:'Mercedes-AMG', pts:19, wins:0, pods:0, dnf:0, pos:21, gap:'-282', form:[]},
    {name:'Lewis', code:'MD2', team:'Vanguard Sabre Motorsport', pts:16, wins:0, pods:0, dnf:0, pos:22, gap:'-285', form:['DNP', 'DNP', 'DNF']},
    {name:'Rats', code:'MD1', team:'Tarigy\'s Motorsport Team F1', pts:16, wins:0, pods:0, dnf:0, pos:23, gap:'-285', form:['DNP', 'DNF', '8']},
    {name:'Skirmis', code:'RD2', team:'Richard Mille LM Motorsport F1', pts:15, wins:0, pods:0, dnf:0, pos:24, gap:'-286', form:['DNP', 'DNP', 'DNP']},
    {name:'GreenShinobi', code:'MD2', team:'Renault Sport Formula 1 Team', pts:15, wins:0, pods:0, dnf:0, pos:25, gap:'-286', form:['DNP', '3', 'DNF']},
    {name:'Rox', code:'—', team:'Renault Sport Formula 1 Team', pts:15, wins:0, pods:0, dnf:0, pos:26, gap:'-286', form:[]},
    {name:'Peters', code:'MD1', team:'Richard Mille LM Motorsport F1', pts:13, wins:0, pods:0, dnf:0, pos:27, gap:'-288', form:['8']},
    {name:'Amin', code:'MD1', team:'Renault Sport Formula 1 Team', pts:12, wins:0, pods:0, dnf:0, pos:28, gap:'-289', form:['4', 'DNP', 'DSq']},
    {name:'John', code:'—', team:'Hertz Porsche', pts:10, wins:0, pods:0, dnf:0, pos:29, gap:'-291', form:[]},
    {name:'Syxe', code:'—', team:'', pts:10, wins:0, pods:0, dnf:0, pos:30, gap:'-291', form:[]},
    {name:'Diego', code:'—', team:'Sahara Force India F1 Team', pts:10, wins:0, pods:0, dnf:0, pos:31, gap:'-291', form:[]},
    {name:'Noah', code:'—', team:'Chonkebee Racing F1', pts:10, wins:0, pods:0, dnf:0, pos:32, gap:'-291', form:[]},
    {name:'Yktomms', code:'—', team:'Aero Apex Racing', pts:8, wins:0, pods:0, dnf:0, pos:33, gap:'-293', form:[]},
    {name:'Infinity', code:'RD2', team:'Aero Apex Racing', pts:8, wins:0, pods:0, dnf:0, pos:34, gap:'-293', form:['DNF', 'DNP', 'DNP']},
    {name:'Bence', code:'MD1', team:'GlitchGP F1 Team', pts:8, wins:0, pods:0, dnf:0, pos:35, gap:'-293', form:['7', '12', '9']},
    {name:'Maldonado', code:'MD2', team:'Tarigy\'s Motorsport Team F1', pts:6, wins:0, pods:0, dnf:0, pos:36, gap:'-295', form:[]},
    {name:'Sam', code:'MD2', team:'Sahara Force India F1 Team', pts:5, wins:0, pods:0, dnf:0, pos:37, gap:'-296', form:['DNP', 'DNP', '10']},
    {name:'Nath', code:'MD1', team:'Vanguard Sabre Motorsport', pts:4, wins:0, pods:0, dnf:0, pos:38, gap:'-297', form:[]},
    {name:'Emirovic', code:'MD2', team:'Mercedes-AMG', pts:3, wins:0, pods:0, dnf:0, pos:39, gap:'-298', form:[]},
    {name:'Gabi', code:'—', team:'Vodafone McLaren', pts:3, wins:0, pods:0, dnf:0, pos:40, gap:'-298', form:[]},
    {name:'Yuki', code:'RD1', team:'GlitchGP F1 Team', pts:2, wins:0, pods:0, dnf:0, pos:41, gap:'-299', form:['9']},
    {name:'Batwert', code:'—', team:'Renault Sport Formula 1 Team', pts:2, wins:0, pods:0, dnf:0, pos:42, gap:'-299', form:[]},
    {name:'Alpha', code:'—', team:'Mercedes-AMG', pts:1, wins:0, pods:0, dnf:0, pos:43, gap:'-300', form:[]},
    {name:'Lightening', code:'—', team:'Red Bull Racing', pts:1, wins:0, pods:0, dnf:0, pos:44, gap:'-300', form:[]},
    {name:'Juan', code:'—', team:'Vanguard Sabre Motorsport', pts:1, wins:0, pods:0, dnf:0, pos:45, gap:'-300', form:[]},
    {name:'Alex', code:'—', team:'Aero Apex Racing', pts:1, wins:0, pods:0, dnf:0, pos:46, gap:'-300', form:[]},
    {name:'Zemmer', code:'—', team:'Renault Sport Formula 1 Team', pts:1, wins:0, pods:0, dnf:0, pos:47, gap:'-300', form:[]},
    {name:'Elijah', code:'—', team:'Hertz Porsche', pts:1, wins:0, pods:0, dnf:0, pos:48, gap:'-300', form:[]},
    {name:'Albanana', code:'—', team:'Chonkebee Racing F1', pts:1, wins:0, pods:0, dnf:0, pos:49, gap:'-300', form:[]}
  ],
  constructors: [
    {name:'Richard Mille LM Motorsport F1', color:'#a78bfa', pts:369, pos:1},
    {name:'Scuderia Ferrari', color:'#dc143c', pts:365, pos:2},
    {name:'Renault Sport Formula 1 Team', color:'#60a5fa', pts:181, pos:3},
    {name:'Mercedes-AMG', color:'#00d2be', pts:139, pos:4},
    {name:'Aero Apex Racing', color:'#7c3aed', pts:117, pos:5},
    {name:'GlitchGP F1 Team', color:'#8e3bb5', pts:94, pos:6},
    {name:'Vodafone McLaren', color:'#ff8000', pts:78, pos:7},
    {name:'Sahara Force India F1 Team', color:'#d7ef00', pts:68, pos:8},
    {name:'Tarigy\'s Motorsport Team F1', color:'#1438d4', pts:64, pos:9},
    {name:'Vanguard Sabre Motorsport', color:'#7f1010', pts:36, pos:10},
    {name:'Hertz Porsche', color:'#b9a96a', pts:33, pos:11}
  ]
};

const F1_RESULTS = {
  '01-f1': [
    {pos:1, name:'Michael', team:'Mercedes-AMG', pts:26, fl:false, pole:false, note:'Retired from championship — pts count for WCC only'},
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:26, fl:false, pole:true, note:'50% rule Art. B.4.2'},
    {pos:2, name:'Douzy', team:'Richard Mille LM Motorsport F1', pts:20, fl:true, pole:false, note:''},
    {pos:3, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:16, fl:false, pole:false, note:''},
    {pos:4, name:'Joshua', team:'Renault Sport Formula 1 Team', pts:13, fl:false, pole:false, note:''},
    {pos:5, name:'Ageftyg2', team:'Vodafone McLaren', pts:11, fl:false, pole:false, note:''},
    {pos:6, name:'Dovantae', team:'Aero Apex Racing', pts:9, fl:false, pole:false, note:''},
    {pos:7, name:'Vitality', team:'Scuderia Ferrari', pts:7, fl:false, pole:false, note:''},
    {pos:8, name:'Nath II', team:'GlitchGP F1 Team', pts:5, fl:false, pole:false, note:''},
    {pos:9, name:'theo', team:'GlitchGP F1 Team', pts:3, fl:false, pole:false, note:''},
    {pos:10, name:'Lewis', team:'Sahara Force India F1 Team', pts:2, fl:false, pole:false, note:''},
    {pos:11, name:'Alpha', team:'Mercedes-AMG', pts:1, fl:false, pole:false, note:'DNF'},
    {pos:12, name:'Lightening', team:'Red Bull Racing', pts:1, fl:false, pole:false, note:'DNF'},
    {pos:13, name:'Juan', team:'Vanguard Sabre Motorsport', pts:1, fl:false, pole:false, note:'DNF'},
    {pos:14, name:'Alex', team:'Aero Apex Racing', pts:1, fl:false, pole:false, note:'DNF (Reserve)'},
    {pos:15, name:'Zemmer', team:'Renault Sport Formula 1 Team', pts:1, fl:false, pole:false, note:'DNF'},
    {pos:16, name:'Elijah', team:'Hertz Porsche', pts:1, fl:false, pole:false, note:'DNS'}
  ],
  '02-f1': [
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:25, fl:false, pole:false, note:''},
    {pos:2, name:'Douzy', team:'Richard Mille LM Motorsport F1', pts:19, fl:true, pole:false, note:''},
    {pos:3, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:15, fl:false, pole:false, note:''},
    {pos:4, name:'Joshua', team:'Renault Sport Formula 1 Team', pts:12, fl:false, pole:false, note:''},
    {pos:5, name:'Dovantae', team:'Aero Apex Racing', pts:10, fl:false, pole:false, note:''},
    {pos:6, name:'Nath II', team:'GlitchGP F1 Team', pts:8, fl:false, pole:false, note:'DNF'},
    {pos:7, name:'Sunrise', team:'Hertz Porsche', pts:6, fl:false, pole:false, note:''},
    {pos:8, name:'Ageftyg2', team:'Vodafone McLaren', pts:0, fl:false, pole:false, note:''},
    {pos:9, name:'Jeffz', team:'Sahara Force India F1 Team', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:10, name:'Elijah', team:'Hertz Porsche', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:11, name:'yktomms the sequel', team:'Aero Apex Racing', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:12, name:'Vitality', team:'Scuderia Ferrari', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:13, name:'Lewis', team:'Sahara Force India F1 Team', pts:0, fl:false, pole:false, note:'DNF'}
  ],
  '03-f1': [
    {pos:1, name:'Douzy', team:'Richard Mille LM Motorsport F1', pts:25, fl:false, pole:false, note:''},
    {pos:2, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Jamie', team:'Renault Sport Formula 1 Team', pts:16, fl:true, pole:false, note:'New Renault Sport Formula 1 Team MD1 (TBC)'},
    {pos:4, name:'Sunrise', team:'Hertz Porsche', pts:12, fl:false, pole:false, note:''},
    {pos:5, name:'Dovantae', team:'Aero Apex Racing', pts:10, fl:false, pole:false, note:''},
    {pos:6, name:'yktomms the sequel', team:'Aero Apex Racing', pts:8, fl:false, pole:false, note:''}
  ],
  '04-f1': [
    {pos:1, name:'Jamie', team:'Renault Sport Formula 1 Team', pts:26, fl:false, pole:false, note:''},
    {pos:2, name:'Douzy', team:'Richard Mille LM Motorsport F1', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:15, fl:false, pole:false, note:''},
    {pos:4, name:'Noel', team:'Mercedes-AMG', pts:12, fl:false, pole:false, note:''},
    {pos:5, name:'Vitality', team:'Scuderia Ferrari', pts:10, fl:false, pole:false, note:''},
    {pos:6, name:'Dovantae', team:'Aero Apex Racing', pts:8, fl:false, pole:false, note:''},
    {pos:7, name:'John', team:'Hertz Porsche', pts:6, fl:false, pole:false, note:''},
    {pos:8, name:'Sunrise', team:'Hertz Porsche', pts:4, fl:false, pole:false, note:''},
    {pos:9, name:'Daih', team:'Vanguard Sabre Motorsport', pts:2, fl:false, pole:false, note:''},
    {pos:10, name:'Gabi', team:'Vodafone McLaren', pts:1, fl:false, pole:false, note:''},
    {pos:11, name:'yktomms the sequel', team:'Aero Apex Racing', pts:0, fl:false, pole:false, note:''}
  ],
  '05-f1': [
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:26, fl:true, pole:true, note:''},
    {pos:2, name:'Jamie', team:'Isreal Racing Point', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Noel', team:'Mercedes-AMG', pts:15, fl:false, pole:false, note:''},
    {pos:4, name:'Douzy', team:'Richard Mille LM Motorsport F1', pts:12, fl:false, pole:false, note:''},
    {pos:5, name:'Noah', team:'Chonkebee Racing F1', pts:10, fl:false, pole:false, note:''},
    {pos:6, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:8, fl:false, pole:false, note:''},
    {pos:7, name:'Tenbreakes', team:'Aero Apex Racing', pts:6, fl:false, pole:false, note:''},
    {pos:8, name:'John', team:'Hertz Porsche', pts:4, fl:false, pole:false, note:''},
    {pos:8, name:'Gabi', team:'Vodafone McLaren', pts:2, fl:false, pole:false, note:''},
    {pos:10, name:'Albanana', team:'Chonkebee Racing F1', pts:1, fl:false, pole:false, note:''},
    {pos:11, name:'SoulX', team:'Vodafone McLaren', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:12, name:'Milan', team:'Cassien Motorsport', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:13, name:'RMA', team:'Scuderia Ferrari', pts:0, fl:false, pole:false, note:'DNF'}
  ],
  '06-f1': [
    {pos:1, name:'Noel', team:'Mercedes-AMG', pts:25, fl:false, pole:false, note:''},
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:25, fl:false, pole:false, note:'50% Rule'},
    {pos:2, name:'Jamie', team:'Isreal Racing Point', pts:18, fl:true, pole:false, note:''},
    {pos:3, name:'Joshua', team:'Isreal Racing Point', pts:15, fl:false, pole:true, note:''},
    {pos:4, name:'Tenbreakes', team:'Aero Apex Racing', pts:12, fl:false, pole:false, note:''},
    {pos:5, name:'Ageftyg2', team:'Vodafone McLaren', pts:10, fl:false, pole:false, note:''},
    {pos:6, name:'Infinity', team:'Scuderia Ferrari', pts:8, fl:false, pole:false, note:''},
    {pos:7, name:'Theo', team:'Monster Energy Performance', pts:6, fl:false, pole:false, note:''},
    {pos:8, name:'Douzy', team:'Richard Mille LM Motorsports F1', pts:4, fl:false, pole:false, note:''},
    {pos:9, name:'Lory', team:'Richard Mille LM Motorsports F1', pts:0, fl:false, pole:false, note:'DSQ'},
    {pos:10, name:'Daih', team:'Monster Cadillac F1', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:11, name:'Lewis', team:'Cassien Motorsport', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:12, name:'Noah', team:'Chonkebee Racing F1', pts:0, fl:false, pole:false, note:'DNF'}
  ],
  '07-f1': [
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:26, fl:true, pole:true, note:''},
    {pos:2, name:'Jamie', team:'Isreal Racing Point', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Noel', team:'Mercedes-AMG', pts:15, fl:false, pole:false, note:''},
    {pos:4, name:'Lory', team:'Richard Mille LM Motorsports F1', pts:12, fl:false, pole:false, note:''},
    {pos:5, name:'Daih', team:'Monster Cadillac F1', pts:10, fl:false, pole:false, note:''},
    {pos:6, name:'Tenbreakes', team:'Aero Apex Racing', pts:8, fl:false, pole:false, note:''},
    {pos:7, name:'Ageftyg2', team:'Vodafone McLaren', pts:0, fl:false, pole:false, note:'DSQ'},
    {pos:8, name:'Joshua', team:'Isreal Racing Point', pts:0, fl:false, pole:false, note:'DSQ'},
    {pos:9, name:'Clamzyro', team:'Chonkebee Racing F1', pts:0, fl:false, pole:false, note:'DSQ'},
    {pos:10, name:'Dovantae', team:'Aero Apex Racing', pts:0, fl:false, pole:false, note:'DNS'},
    {pos:11, name:'Luddster', team:'Hertz Porsche', pts:0, fl:false, pole:false, note:'DNS'},
    {pos:12, name:'Whapples', team:'Chonkebee Racing F1', pts:0, fl:false, pole:false, note:'DNS'}
  ],
  '08-f1': [
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:26, fl:true, pole:true, note:''},
    {pos:2, name:'Douzy', team:'Richard Mille LM Motorsport F1', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Skirmis', team:'Richard Mille LM Motorsport F1', pts:15, fl:false, pole:false, note:''},
    {pos:4, name:'Daih', team:'Monster Cadillac F1', pts:12, fl:false, pole:false, note:''},
    {pos:5, name:'Tenbreakes', team:'Aero Apex Racing', pts:10, fl:false, pole:false, note:''},
    {pos:6, name:'Theo', team:'Monster Energy Performance', pts:8, fl:false, pole:false, note:''},
    {pos:8, name:'Lewis', team:'Cassien Motorsport', pts:6, fl:false, pole:false, note:'DSQ'},
    {pos:9, name:'Sam', team:'Cassien Motorsport', pts:4, fl:false, pole:false, note:'DSQ'},
    {pos:10, name:'Vitality', team:'Scuderia Ferrari', pts:2, fl:false, pole:false, note:'DNS'},
    {pos:11, name:'Alpha', team:'Mercedes-AMG', pts:0, fl:false, pole:false, note:'Mechanical Failure'},
    {pos:12, name:'Chester', team:'Aero Apex Racing', pts:0, fl:false, pole:false, note:'DNS'}
  ],
  '09-f1': [
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:25, fl:false, pole:false, note:'Leader'},
    {pos:2, name:'Ageftyg2', team:'Scuderia Ferrari', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Sly', team:'Sahara Force India F1 Team', pts:15, fl:false, pole:false, note:''},
    {pos:4, name:'Sckibles', team:'GlitchGP F1 Team', pts:12, fl:false, pole:false, note:''},
    {pos:5, name:'Tenbreakes', team:'Vanguard Sabre Motorsport', pts:10, fl:false, pole:false, note:''},
    {pos:6, name:'Lewis', team:'Vanguard Sabre Motorsport', pts:8, fl:false, pole:false, note:'+1 Lap'},
    {pos:7, name:'Noel', team:'Mercedes-AMG', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:8, name:'Sun_Rise', team:'Hertz Porsche', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:9, name:'Sam', team:'Sahara Force India F1 Team', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:10, name:'Nath II', team:'Mercedes-AMG', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:11, name:'Hakeman', team:'TBC', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:12, name:'Jamie', team:'Richard Mille LM Motorsport F1', pts:0, fl:false, pole:false, note:'DSQ'},
    {pos:13, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:0, fl:false, pole:false, note:'DSQ'}
  ],
  '10-f1': [
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:26, fl:true, pole:false, note:'Leader (5s Pen) · Fastest Lap 1:06.566'},
    {pos:2, name:'Jamie', team:'Richard Mille LM Motorsport F1', pts:18, fl:false, pole:false, note:'5s Penalty'},
    {pos:3, name:'Sly', team:'Sahara Force India F1 Team', pts:15, fl:false, pole:false, note:'5s Penalty'},
    {pos:4, name:'Unironically', team:'Mercedes-AMG', pts:12, fl:false, pole:false, note:''},
    {pos:5, name:'Karazu Arin', team:'Aero Apex Racing', pts:10, fl:false, pole:false, note:'5s Penalty'},
    {pos:6, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:8, fl:false, pole:false, note:'10s Penalty'},
    {pos:7, name:'Nath II', team:'Mercedes-AMG', pts:6, fl:false, pole:false, note:''},
    {pos:8, name:'Rats', team:'Oracle Red Bull Racing F1', pts:4, fl:false, pole:false, note:'10s Penalty'},
    {pos:9, name:'Bence', team:'GlitchGP F1 Team', pts:2, fl:false, pole:false, note:''},
    {pos:10, name:'Sam', team:'Sahara Force India F1 Team', pts:1, fl:false, pole:false, note:'15s Penalty'},
    {pos:11, name:'GreenShinobi', team:'Renault Sport Formula 1 Team', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:12, name:'Ageftyg2', team:'Scuderia Ferrari', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:13, name:'Yokesecapo', team:'GlitchGP F1 Team', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:14, name:'Octi', team:'Oracle Red Bull Racing F1', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:15, name:'Igorexe', team:'Hertz Porsche', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:16, name:'Lewis', team:'Vanguard Sabre Motorsport', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:17, name:'Amin', team:'Renault Sport Formula 1 Team', pts:0, fl:false, pole:false, note:'DSQ'}
  ],
  '11-f1': [
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:26, fl:true, pole:false, note:'Leader'},
    {pos:2, name:'Jamie', team:'Richard Mille LM Motorsport F1', pts:18, fl:false, pole:true, note:'+16.799'},
    {pos:3, name:'GreenShinobi', team:'Renault Sports Formula 1 Team', pts:15, fl:false, pole:false, note:'+28.000'},
    {pos:4, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:12, fl:false, pole:false, note:'+47.914'},
    {pos:5, name:'gkf', team:'Vodafone McLaren', pts:10, fl:false, pole:false, note:'+63.014'},
    {pos:6, name:'Karazu Arin', team:'Aero Apex Racing', pts:8, fl:false, pole:false, note:'+75.315 (20s Penalty)'},
    {pos:7, name:'Yokesecapo', team:'GlitchGP F1 Team', pts:6, fl:false, pole:false, note:'+1 Lap'},
    {pos:8, name:'Unironically', team:'Mercedes-AMG', pts:4, fl:false, pole:false, note:'+1 Lap'},
    {pos:9, name:'Ageftyg2', team:'Scuderia Ferrari', pts:2, fl:false, pole:false, note:'+1 Lap'},
    {pos:10, name:'Theo', team:'Vodafone McLaren', pts:1, fl:false, pole:false, note:'+1 Lap'},
    {pos:11, name:'Vein Blong', team:'Sahara Force India F1 Team', pts:0, fl:false, pole:false, note:'+2 Laps'},
    {pos:12, name:'Bence', team:'Glitch GP F1 Team', pts:0, fl:false, pole:false, note:'+2 Laps'},
    {pos:13, name:'Waffle', team:'Vanguard Sabre Motorsports', pts:0, fl:false, pole:false, note:'+2 Laps'},
    {pos:14, name:'Sly', team:'Sahara Force India F1 Team', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:15, name:'Joshua', team:'Aero Apex Racing', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:16, name:'Nath II', team:'Mercedes-AMG', pts:0, fl:false, pole:false, note:'DNF (Ragequit cuz of CC Slowdown)'},
    {pos:17, name:'Rats', team:'Red Bull Racing F1 Team', pts:0, fl:false, pole:false, note:'DNF'}
  ],
  '12-f1': [
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:25, fl:false, pole:false, note:'Leader'},
    {pos:2, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:19, fl:true, pole:false, note:'+4.467'},
    {pos:3, name:'Sly', team:'Sahara Force India F1 Team', pts:15, fl:false, pole:true, note:'+39.149'},
    {pos:4, name:'Amin', team:'Renault Sports Formula 1 Team', pts:12, fl:false, pole:false, note:'+68.452'},
    {pos:5, name:'Karazu Arin', team:'Aero Apex Racing', pts:10, fl:false, pole:false, note:'+84.630'},
    {pos:6, name:'gkf', team:'Vodafone McLaren', pts:8, fl:false, pole:false, note:'+94.913'},
    {pos:7, name:'Bence', team:'GlitchGP F1 Team', pts:6, fl:false, pole:false, note:'+1 Lap'},
    {pos:8, name:'Peters', team:'Richard Mille LM Motorsport F1', pts:4, fl:false, pole:false, note:'+2 Laps'},
    {pos:9, name:'Yuki', team:'GlitchGP F1 Team', pts:2, fl:false, pole:false, note:'+2 Laps'},
    {pos:10, name:'Infinity', team:'Aero Apex Racing', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:11, name:'Maldonado', team:'Red Bull Racing F1 Team', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:12, name:'Vein Blong', team:'Sahara Force India F1 Team', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:13, name:'Vitality', team:'Scuderia Ferrari', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:12, name:'Leo', team:'Mercedes-AMG', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:13, name:'Waffle', team:'Vanguard Sabre Motorsports', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:14, name:'Octi', team:'Red Bull Racing F1 Team', pts:0, fl:false, pole:false, note:'DNF'}
  ],
  '13-f1': [
    {pos:1, name:'Nick', team:'Scuderia Ferrari', pts:26, fl:true, pole:false, note:'Leader · Fastest Lap'},
    {pos:2, name:'yokesecapo', team:'GlitchGP F1 Team', pts:18, fl:false, pole:false, note:'+33.868 (10s Pen)'},
    {pos:3, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:15, fl:false, pole:false, note:'+50.206 (10s Pen)'},
    {pos:4, name:'ShadowRex', team:'Tarigy\'s Motorsport Team F1', pts:12, fl:false, pole:false, note:'+66.723 (30s Pen)'},
    {pos:5, name:'theo', team:'Vodafone McLaren', pts:10, fl:false, pole:false, note:'+74.701'},
    {pos:6, name:'SCKIBLES', team:'GlitchGP F1 Team', pts:8, fl:false, pole:false, note:'+1 Lap'},
    {pos:7, name:'Karazu Arin', team:'Aero Apex Racing', pts:6, fl:false, pole:false, note:'+1 Lap (20s Pen)'},
    {pos:8, name:'Vitality', team:'Scuderia Ferrari', pts:4, fl:false, pole:false, note:'+1 Lap'},
    {pos:9, name:'gkf', team:'Vodafone McLaren', pts:2, fl:false, pole:false, note:'+2 Laps'},
    {pos:10, name:'Emirovic', team:'Mercedes-AMG', pts:1, fl:false, pole:false, note:'+2 Laps (15s Pen)'},
    {pos:11, name:'Unironically', team:'Mercedes-AMG', pts:0, fl:false, pole:false, note:'+4 Laps'},
    {pos:12, name:'Octi', team:'Tarigy\'s Motorsport Team F1', pts:0, fl:false, pole:false, note:'DNF'}
  ],
  '14-f1': [
    {pos:1, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:26, fl:true, pole:false, gap:'Leader', note:'Fastest Lap'},
    {pos:2, name:'Unironically', team:'Mercedes-AMG', pts:18, fl:false, pole:false, gap:'+2.298', note:''},
    {pos:3, name:'gkf', team:'Vodafone McLaren', pts:15, fl:false, pole:false, gap:'+3.085', note:''},
    {pos:4, name:'ShadowRex', team:'Tarigy\'s Motorsport Team F1', pts:12, fl:false, pole:false, gap:'+5.014', note:''},
    {pos:5, name:'syxe', team:'GlitchGP F1 Team', pts:10, fl:false, pole:false, gap:'+5.266', note:''},
    {pos:6, name:'Peters', team:'Richard Mille LM Motorsport F1', pts:8, fl:false, pole:false, gap:'+5.774', note:''},
    {pos:7, name:'Maldonado', team:'Tarigy\'s Motorsport Team F1', pts:6, fl:false, pole:false, gap:'+8.064', note:''},
    {pos:8, name:'Nath', team:'Vanguard Sabre Motorsport', pts:4, fl:false, pole:false, gap:'+8.250', note:''},
    {pos:9, name:'Emirovic', team:'Mercedes-AMG', pts:2, fl:false, pole:false, gap:'+14.864', note:''},
    {pos:10, name:'Vitality', team:'Scuderia Ferrari', pts:1, fl:false, pole:false, gap:'+17.067', note:''},
    {pos:11, name:'Amin', team:'Renault Sport Formula 1 Team', pts:0, fl:false, pole:false, gap:'+22.147', note:''},
    {pos:12, name:'Igorexe', team:'Hertz Porsche', pts:0, fl:false, pole:false, gap:'+23.513', note:''},
    {pos:13, name:'Luddster', team:'Hertz Porsche', pts:0, fl:false, pole:false, gap:'+24.446', note:''},
    {pos:14, name:'theo', team:'Vodafone McLaren', pts:0, fl:false, pole:false, gap:'+51.148', note:''},
    {pos:15, name:'Waffle', team:'Vanguard Sabre Motorsport', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:16, name:'El_krazy', team:'GlitchGP F1 Team', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:17, name:'Sly', team:'BMW Sauber F1 Team', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'}
  ],
  '15-f1': [
    {pos:1, name:'Lory', team:'Richard Mille LM Motorsport F1', pts:25, fl:false, pole:false, gap:'Leader', note:''},
    {pos:2, name:'Nick', team:'Scuderia Ferrari', pts:19, fl:true, pole:false, gap:'+0.917', note:'Fastest Lap'},
    {pos:3, name:'Rox', team:'Renault Sport Formula 1 Team', pts:15, fl:false, pole:false, gap:'+6.149', note:''},
    {pos:4, name:'yokesecapo', team:'Scuderia Ferrari', pts:12, fl:false, pole:false, gap:'+9.767', note:''},
    {pos:5, name:'Diego', team:'Sahara Force India F1 Team', pts:10, fl:false, pole:false, gap:'+11.283', note:''},
    {pos:6, name:'gkf', team:'Vodafone McLaren', pts:8, fl:false, pole:false, gap:'+15.350', note:''},
    {pos:7, name:'Unironically', team:'Mercedes-AMG', pts:6, fl:false, pole:false, gap:'+17.916', note:''},
    {pos:8, name:'ShadowRex', team:'Tarigy\'s Motorsport Team F1', pts:4, fl:false, pole:false, gap:'+19.066', note:''},
    {pos:9, name:'Batwert', team:'Renault Sport Formula 1 Team', pts:2, fl:false, pole:false, gap:'+19.599', note:''},
    {pos:10, name:'Peters', team:'Richard Mille LM Motorsport F1', pts:1, fl:false, pole:false, gap:'+21.582', note:''},
    {pos:11, name:'Sly', team:'Sahara Force India F1 Team', pts:0, fl:false, pole:false, gap:'+23.491', note:''},
    {pos:12, name:'Joshua', team:'Aero Apex Racing', pts:0, fl:false, pole:false, gap:'+25.632', note:''},
    {pos:13, name:'Igorexe', team:'Hertz Porsche', pts:0, fl:false, pole:false, gap:'+33.448', note:''},
    {pos:14, name:'Emirovic', team:'Mercedes-AMG', pts:0, fl:false, pole:false, gap:'+37.965', note:''},
    {pos:15, name:'EL_KRAZY', team:'GlitchGP F1 Team', pts:0, fl:false, pole:false, gap:'+63.164', note:''},
    {pos:16, name:'luddster', team:'Hertz Porsche', pts:0, fl:false, pole:false, gap:'', note:'DNF'},
    {pos:17, name:'Waffle', team:'Vanguard Sabre Motorsport', pts:0, fl:false, pole:false, gap:'', note:'DNF'},
    {pos:18, name:'Nath', team:'Vanguard Sabre Motorsport', pts:0, fl:false, pole:false, gap:'', note:'DNF'},
    {pos:19, name:'Infinity', team:'Aero Apex Racing', pts:0, fl:false, pole:false, gap:'', note:'DNF'},
    {pos:20, name:'Theo', team:'Vodafone McLaren', pts:0, fl:false, pole:false, gap:'', note:'DSQ'}
  ]
};

// ================= F2 =================
const F2_LINEUPS = window.VMS_LINEUPS.f2;

const F2_STANDINGS = {
  drivers: [
    {name:'Gamrin', code:'MD1', team:'Renault Sport Formula 2 Team (Isreal)', pts:196, wins:0, pods:0, dnf:0, pos:1, gap:'0', form:[]},
    {name:'Skirmis', code:'MD1', team:'LM Performance F2', pts:196, wins:0, pods:0, dnf:0, pos:2, gap:'0', form:[]},
    {name:'Crocs', code:'MD2', team:'Carti Racing Association', pts:168, wins:0, pods:0, dnf:0, pos:3, gap:'-28', form:[]},
    {name:'Juan', code:'MD1', team:'Carti Racing Association', pts:144, wins:0, pods:0, dnf:0, pos:4, gap:'-52', form:[]},
    {name:'Alien', code:'MD1', team:'Nissan Nissmo (Night Reapers X)', pts:101, wins:0, pods:0, dnf:0, pos:5, gap:'-95', form:[]},
    {name:'Zaphira', code:'MD2', team:'Nissan Nissmo (Night Reapers X)', pts:47, wins:0, pods:0, dnf:0, pos:6, gap:'-149', form:[]},
    {name:'Jeffz', code:'MD3', team:'LM Performance F2', pts:40, wins:0, pods:0, dnf:0, pos:7, gap:'-156', form:[]},
    {name:'Peters', code:'MD2', team:'LM Performance F2', pts:38, wins:0, pods:0, dnf:0, pos:8, gap:'-158', form:[]},
    {name:'Style', code:'MD1', team:'Vanguard Sabre Racing', pts:24, wins:0, pods:0, dnf:0, pos:9, gap:'-172', form:[]},
    {name:'Fandrs', code:'MD1', team:'GlitchGP F2 Team', pts:22, wins:0, pods:0, dnf:0, pos:10, gap:'-174', form:[]},
    {name:'Zach', code:'—', team:'', pts:20, wins:0, pods:0, dnf:0, pos:11, gap:'-176', form:[]},
    {name:'Igor', code:'RD1', team:'Tarigy’s Motorsport Team F2 (Acura)', pts:20, wins:0, pods:0, dnf:0, pos:12, gap:'-176', form:[]},
    {name:'Gui', code:'RD1', team:'Renault Sport Formula 2 Team (Isreal)', pts:20, wins:0, pods:0, dnf:0, pos:13, gap:'-176', form:[]},
    {name:'Zayn', code:'MD2', team:'AF Corsa', pts:16, wins:0, pods:0, dnf:0, pos:14, gap:'-180', form:[]},
    {name:'Kyo', code:'MD1', team:'Aero Apex Racing F2', pts:14, wins:0, pods:0, dnf:0, pos:15, gap:'-182', form:[]},
    {name:'Vittorio', code:'RD2', team:'Nissan Nissmo (Night Reapers X)', pts:13, wins:0, pods:0, dnf:0, pos:16, gap:'-183', form:[]},
    {name:'Maldonado', code:'MD1', team:'Tarigy’s Motorsport Team F2 (Acura)', pts:12, wins:0, pods:0, dnf:0, pos:17, gap:'-184', form:[]},
    {name:'Wavee', code:'MD1', team:'Racing Point F2 (Cassien)', pts:12, wins:0, pods:0, dnf:0, pos:18, gap:'-184', form:[]},
    {name:'Gasly', code:'RD1', team:'AF Corsa', pts:10, wins:0, pods:0, dnf:0, pos:19, gap:'-186', form:[]},
    {name:'Danomk', code:'MD2', team:'GlitchGP F2 Team', pts:10, wins:0, pods:0, dnf:0, pos:20, gap:'-186', form:[]},
    {name:'Nahim', code:'MD2', team:'Vanguard Sabre Racing', pts:10, wins:0, pods:0, dnf:0, pos:21, gap:'-186', form:[]},
    {name:'Messi', code:'—', team:'', pts:10, wins:0, pods:0, dnf:0, pos:22, gap:'-186', form:[]},
    {name:'Yokesecapo', code:'—', team:'', pts:8, wins:0, pods:0, dnf:0, pos:23, gap:'-188', form:[]},
    {name:'Penguin', code:'RD1', team:'Vanguard Sabre Racing', pts:6, wins:0, pods:0, dnf:0, pos:24, gap:'-190', form:[]},
    {name:'AO', code:'MD2', team:'BMW Sauber F2 Team (OKX HP Crimson GP)', pts:6, wins:0, pods:0, dnf:0, pos:25, gap:'-190', form:[]},
    {name:'Alonso', code:'—', team:'Tarigy’s Motorsport Team F2 (Acura)', pts:4, wins:0, pods:0, dnf:0, pos:26, gap:'-192', form:[]},
    {name:'Bence', code:'—', team:'', pts:4, wins:0, pods:0, dnf:0, pos:27, gap:'-192', form:[]},
    {name:'Dante', code:'MD2', team:'Tarigy’s Motorsport Team F2 (Acura)', pts:3, wins:0, pods:0, dnf:0, pos:28, gap:'-193', form:[]},
    {name:'Lewis', code:'MD1', team:'Vanguard Sabre Racing', pts:2, wins:0, pods:0, dnf:0, pos:29, gap:'-194', form:[]},
    {name:'FB', code:'MD2', team:'Aero Apex Racing F2', pts:1, wins:0, pods:0, dnf:0, pos:30, gap:'-195', form:[]}
  ],
  constructors: [
    {name:'LM Performance F2', color:'#a78bfa', pts:390, pos:1},
    {name:'Carti Racing Association', color:'#ec4899', pts:260, pos:2},
    {name:'Renault Sport Formula 2 Team (Isreal)', color:'#60a5fa', pts:245, pos:3},
    {name:'Tarigy’s Motorsport Team F2 (Acura)', color:'#7b2cbf', pts:109, pos:4},
    {name:'Nissan Nissmo (Night Reapers X)', color:'#dbe4cf', pts:87, pos:5},
    {name:'Aero Apex Racing F2', color:'#2496d2', pts:73, pos:6},
    {name:'AF Corsa', color:'#e11d48', pts:70, pos:7},
    {name:'Racing Point F2 (Cassien)', color:'#d100ff', pts:44, pos:8},
    {name:'Vanguard Sabre Racing', color:'#b91c1c', pts:44, pos:9},
    {name:'GlitchGP F2 Team', color:'#8e3bb5', pts:44, pos:10},
    {name:'BMW Sauber F2 Team (OKX HP Crimson GP)', color:'#7dd3fc', pts:6, pos:11}
  ]
};

const F2_RESULTS = {
  '02-f2': [
    {pos:1, name:'Gamrin', team:'LM Performance F2', pts:23, fl:false, pole:true, note:''},
    {pos:2, name:'Skirmis', team:'LM Performance F2', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Style', team:'Renault Sport Formula 1 Team', pts:16, fl:false, pole:false, note:''},
    {pos:4, name:'Crocs', team:'Acura Team Penske', pts:14, fl:false, pole:false, note:''},
    {pos:5, name:'Igorexe', team:'Acura Team Penske', pts:12, fl:false, pole:false, note:''},
    {pos:6, name:'Gasly', team:'AF Corsa', pts:10, fl:false, pole:false, note:''},
    {pos:7, name:'Nahim', team:'Renault Sport Formula 1 Team', pts:8, fl:false, pole:false, note:''},
    {pos:8, name:'Batman', team:'Night Reapers X', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:9, name:'Alistair', team:'Campos Racing F2', pts:0, fl:false, pole:false, note:'DNF'}
  ],
  '03-f2': [
    {pos:1, name:'Skirmis', team:'LM Performance F2', pts:20, fl:false, pole:true, note:'Leader'},
    {pos:2, name:'Gamrin', team:'LM Performance F2', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Neon', team:'Renault Sport Formula 1 Team', pts:16, fl:false, pole:false, note:''},
    {pos:4, name:'Batman', team:'Night Reapers X', pts:15, fl:true, pole:false, note:'Fastest Lap'},
    {pos:5, name:'Crocs', team:'Acura Team Penske', pts:12, fl:false, pole:false, note:''}
  ],
  '04-f2': [
    {pos:1, name:'Gamrin', team:'LM Performance F2', pts:22, fl:false, pole:true, gap:'', note:''},
    {pos:2, name:'Skirmis', team:'LM Performance F2', pts:19, fl:false, pole:false, gap:'', note:''},
    {pos:3, name:'neon', team:'Renault Sport Formula 1 Team', pts:16, fl:false, pole:false, gap:'', note:''},
    {pos:4, name:'Jandosak', team:'Carti Racing Association', pts:14, fl:false, pole:false, gap:'', note:''},
    {pos:5, name:'Ash', team:'Aero Apex Racing F2', pts:12, fl:false, pole:false, gap:'', note:''},
    {pos:6, name:'ZAYN', team:'AF Corsa', pts:10, fl:false, pole:false, gap:'', note:''},
    {pos:7, name:'Nahim', team:'Renault Sport Formula 1 Team', pts:0, fl:false, pole:false, gap:'', note:''},
    {pos:8, name:'Alistair', team:'Campos Racing F2', pts:0, fl:false, pole:false, gap:'', note:''},
    {pos:9, name:'Batman', team:'Night Reapers X', pts:0, fl:false, pole:false, gap:'', note:''}
  ],
  '05-f2': [
    {pos:1, name:'Zach', team:'Aero Apex Racing F2', pts:20, fl:false, pole:false, note:''},
    {pos:2, name:'Skirmis', team:'LM Performance F2', pts:21, fl:false, pole:false, note:''},
    {pos:3, name:'Gamrin', team:'LM Performance F2', pts:16, fl:false, pole:false, note:''},
    {pos:3, name:'neon', team:'Isreal Racing Point', pts:16, fl:false, pole:false, note:''},
    {pos:4, name:'Crocs', team:'Acura Team Penske', pts:14, fl:false, pole:false, note:''},
    {pos:5, name:'Vittorioso', team:'Cassien Motorsports F2', pts:12, fl:false, pole:false, note:''},
    {pos:6, name:'Zaphira', team:'Isreal Racing Point', pts:10, fl:false, pole:false, note:''},
    {pos:7, name:'Lewis Hamilton', team:'Vanguard Sabre Motorsports', pts:8, fl:false, pole:false, note:''},
    {pos:8, name:'Ash', team:'Aero Apex Racing F2', pts:6, fl:false, pole:false, note:''},
    {pos:9, name:'Jandosak', team:'Carti Racing Association', pts:4, fl:false, pole:false, note:''},
    {pos:10, name:'Batman', team:'Night Reapers X', pts:2, fl:false, pole:false, note:''},
    {pos:11, name:'Gasly', team:'AF Corsa', pts:0, fl:false, pole:false, note:''}
  ],
  '06-f2': [
    {pos:1, name:'Skirmis', team:'LM Performance F2', pts:22, fl:true, pole:false, note:''},
    {pos:2, name:'Gamrin', team:'LM Performance F2', pts:19, fl:false, pole:true, note:''},
    {pos:3, name:'Neon', team:'Isreal Racing Point', pts:16, fl:false, pole:false, note:''},
    {pos:3, name:'Zaphira', team:'Isreal Racing Point', pts:16, fl:false, pole:false, note:''},
    {pos:4, name:'gabriel', team:'Vanguard Sabre Motorsports', pts:14, fl:false, pole:false, note:''},
    {pos:5, name:'Crocs', team:'Acura Team Penske', pts:12, fl:false, pole:false, note:''},
    {pos:6, name:'Alien', team:'AF Corsa', pts:10, fl:false, pole:false, note:''},
    {pos:7, name:'Igorexe', team:'Acura Team Penske', pts:8, fl:false, pole:false, note:''},
    {pos:8, name:'Fandrs', team:'PREMA Fast Line Racing', pts:6, fl:false, pole:false, note:''},
    {pos:9, name:'Lewis Hamilton', team:'Vanguard Sabre Motorsports', pts:4, fl:false, pole:false, note:''},
    {pos:10, name:'ZAYN', team:'AF Corsa', pts:2, fl:false, pole:false, note:''},
    {pos:11, name:'Vittorioso', team:'Cassien Motorsports F2', pts:0, fl:false, pole:false, note:''},
    {pos:12, name:'Yuki', team:'PREMA Fast Line Racing', pts:0, fl:false, pole:false, note:''},
    {pos:13, name:'AObro13', team:'Carti Racing Association', pts:0, fl:false, pole:false, note:''},
    {pos:14, name:'Ash', team:'Aero Apex Racing F2', pts:0, fl:false, pole:false, note:''}
  ],
  '07-f2': [
    {pos:1, name:'Gamrin', team:'LM Performance F2', pts:21, fl:0, pole:1, note:'Leader · Under Investigation'},
    {pos:2, name:'Skirmis', team:'LM Performance F2', pts:18, fl:0, pole:0, note:'+13.049'},
    {pos:3, name:'Alien', team:'AF Corsa', pts:18, fl:1, pole:0, note:'+18.518'},
    {pos:4, name:'Crocs', team:'Acura Team Penske', pts:14, fl:0, pole:0, note:'+30.716'},
    {pos:5, name:'Neon', team:'Isreal Racing Point', pts:12, fl:0, pole:0, note:'+46.432'},
    {pos:6, name:'Zaphira', team:'Isreal Racing Point', pts:10, fl:0, pole:0, note:'+47.915'},
    {pos:7, name:'Lewis Hamilton', team:'Vanguard Sabre Motorsports', pts:8, fl:0, pole:0, note:'+82.813'},
    {pos:8, name:'Penguin', team:'Vanguard Sabre Motorsports', pts:6, fl:0, pole:0, note:'+93.929'},
    {pos:9, name:'Fandrs', team:'PREMA Fast Line Racing', pts:4, fl:0, pole:0, note:'+1 Lap'},
    {pos:10, name:'wavee', team:'Cassien Motorsports F2', pts:2, fl:0, pole:0, note:'+1 Lap'},
    {pos:11, name:'Danomk', team:'PREMA Fast Line Racing', pts:0, fl:0, pole:0, note:'+1 Lap'},
    {pos:12, name:'ZAYN', team:'AF Corsa', pts:0, fl:0, pole:0, note:'Not Classified'}
  ],
  '08-f2': [
    {pos:1, name:'Jeffz', team:'Cassien Motorsport', pts:20, fl:0, pole:0, note:'Leader'},
    {pos:2, name:'Gamrin', team:'LM Performance F2', pts:20, fl:1, pole:0, note:'+24.212'},
    {pos:3, name:'Alien', team:'AF Corsa', pts:16, fl:0, pole:0, note:'+31.099'},
    {pos:4, name:'Juan', team:'Carti Racing Association', pts:15, fl:0, pole:1, note:'+36.681'},
    {pos:5, name:'Fandrs', team:'PREMA Fast Line Racing', pts:12, fl:0, pole:0, note:'+38.081'},
    {pos:6, name:'Danomk', team:'Formula Racing', pts:10, fl:0, pole:0, note:'+41.681'},
    {pos:7, name:'Style', team:'Isreal Racing Point', pts:8, fl:0, pole:0, note:'+64.021'},
    {pos:8, name:'Crocs', team:'Acura Team Penske', pts:6, fl:0, pole:0, note:'+68.013'},
    {pos:9, name:'ZAYN', team:'AF Corsa', pts:4, fl:0, pole:0, note:'+1 Lap'},
    {pos:10, name:'Lewis Hamilton', team:'Vanguard Sabre Motorsports', pts:0, fl:0, pole:0, note:'DNF'},
    {pos:11, name:'JULES', team:'Cassien Motorsport', pts:0, fl:0, pole:0, note:'DNF'}
  ],
  '09-f2': [
    {pos:1, name:'Juantoes', team:'Carti Racing Association', pts:27, fl:true, pole:false, note:'Leader'},
    {pos:2, name:'Skirmis', team:'LM Performance F2', pts:18, fl:false, pole:false, note:'+4.433'},
    {pos:3, name:'Crocs', team:'Carti Racing Association', pts:15, fl:false, pole:false, note:'+7.752'},
    {pos:4, name:'Alien', team:'Nissan Nissmo', pts:12, fl:false, pole:false, note:'+25.452'},
    {pos:5, name:'wavee', team:'Racing Point F2', pts:10, fl:false, pole:false, note:'+29.866'},
    {pos:6, name:'Peters', team:'LM Performance F2', pts:8, fl:false, pole:false, note:'+35.266'},
    {pos:7, name:'Gamrin', team:'Renault Sport Formula 2 Team', pts:7, fl:false, pole:true, note:'+1 Lap'},
    {pos:8, name:'Vittorioso', team:'Nissan Nissmo', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:9, name:'Gui', team:'Renault Sport Formula 2 Team', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:10, name:'ShadowRex', team:'Tarigy\'s Motorsport Team F2', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:11, name:'Danomk', team:'PREMA Fast Line Racing', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:12, name:'IndyTogetsu', team:'OKX HP Crimson GP', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:13, name:'Santos', team:'Racing Point F2', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:14, name:'Fandrs', team:'PREMA Fast Line Racing', pts:0, fl:false, pole:false, note:'DNF'}
  ],
  '10-f2': [
    {pos:1, name:'Gamrin', team:'Renault Sport Formula 2 Team', pts:25, fl:false, pole:false, note:'Leader · 10s Pen'},
    {pos:2, name:'Crocs', team:'Carti Racing Association', pts:20, fl:true, pole:false, note:'+1.616'},
    {pos:3, name:'Peters', team:'LM Performance F2', pts:15, fl:false, pole:false, note:'+16.265'},
    {pos:4, name:'Maldonado', team:'Tarigy\'s Motorsport Team F2', pts:12, fl:false, pole:false, note:'5s Pen · +38.765'},
    {pos:5, name:'Alien', team:'Nissan Nissmo', pts:11, fl:false, pole:true, note:'5s Pen · +1 Lap'},
    {pos:6, name:'Zaphira', team:'Nissan Nissmo', pts:8, fl:false, pole:false, note:'+1 Lap'},
    {pos:7, name:'Lewis Hamilton', team:'Vanguard Sabre Racing', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:8, name:'Skirmis', team:'LM Performance F2', pts:0, fl:false, pole:false, note:'DNF'},
    {pos:9, name:'AO', team:'BMW Sauber F2 Team', pts:0, fl:false, pole:false, note:'DNS'}
  ],
  '11-f2': [
    {pos:1, name:'Juantoes', team:'Carti Racing Association', pts:28, fl:true, pole:true, note:'Leader'},
    {pos:2, name:'Skirmis', team:'LM Performance F2', pts:18, fl:false, pole:false, note:'+4.033'},
    {pos:3, name:'Peters', team:'LM Performance F2', pts:15, fl:false, pole:false, note:'+15.116'},
    {pos:4, name:'Crocs', team:'Carti Racing Association', pts:12, fl:false, pole:false, note:'12'},
    {pos:5, name:'EXO_Kyo', team:'Aero Apex Racing F2', pts:10, fl:false, pole:false, note:'+16.418'},
    {pos:6, name:'Alien', team:'Nissan Nissmo', pts:8, fl:false, pole:false, note:'+33.432'},
    {pos:7, name:'Gamrin', team:'Renault Sport Formula 2 Team', pts:6, fl:false, pole:false, note:'+44.356'},
    {pos:8, name:'Gui', team:'Renault Sport Formula 2 Team', pts:4, fl:false, pole:false, note:'+57.181'},
    {pos:9, name:'Nahim', team:'Vanguard Sabre Racing', pts:2, fl:false, pole:false, note:'+1 Lap'},
    {pos:10, name:'Zaphira', team:'Nissan Nissmo', pts:1, fl:false, pole:false, note:'+1 Lap'},
    {pos:11, name:'Maldonado', team:'Tarigy\'s Motorsport Team F2', pts:0, fl:false, pole:false, note:'+2 Laps'},
    {pos:12, name:'idk and idc', team:'', pts:0, fl:false, pole:false, note:'Not Classified'}
  ],
  '12-f2': [
    {pos:1, name:'Juantoes', team:'Carti Racing Association', pts:26, fl:0, pole:1, note:'Leader'},
    {pos:2, name:'Jeffz', team:'LM Performance F2', pts:20, fl:1, pole:0, note:'+8.254 · 5s Pen'},
    {pos:3, name:'Gamrin', team:'Renault Sport Formula 2 Team', pts:15, fl:0, pole:0, note:'+25.633'},
    {pos:4, name:'Skirmis', team:'LM Performance F2', pts:12, fl:0, pole:0, note:'+30.182'},
    {pos:5, name:'Alien', team:'Nissan Nissmo', pts:10, fl:0, pole:0, note:'+41.699 · 5s Pen'},
    {pos:6, name:'Crocs', team:'Carti Racing Association', pts:8, fl:0, pole:0, note:'+46.920'},
    {pos:7, name:'Gui', team:'Renault Sport Formula 2 Team', pts:6, fl:0, pole:0, note:'+1 Lap'},
    {pos:8, name:'Alonso', team:'Tarigy\'s Motorsport Team F2', pts:4, fl:0, pole:0, note:'+1 Lap'},
    {pos:9, name:'Lewis', team:'Vanguard Sabre Racing', pts:2, fl:0, pole:0, note:'+1 Lap'},
    {pos:10, name:'dante', team:'Tarigy\'s Motorsport Team F2', pts:1, fl:0, pole:0, note:'+2 Laps'}
  ],
  '13-f2': [
    {pos:1, name:'Juantoes', team:'Carti Racing Association', pts:27, fl:true, pole:false, note:'Leader · Fastest Lap'},
    {pos:2, name:'Crocs', team:'Carti Racing Association', pts:18, fl:false, pole:false, note:'+10.150'},
    {pos:3, name:'Skirmis', team:'LM Performance F2', pts:15, fl:false, pole:false, note:'+13.017'},
    {pos:4, name:'Gamrin', team:'Renault Sport Formula 2 Team', pts:13, fl:false, pole:true, note:'+21.466 (10s Pen)'},
    {pos:5, name:'Alien', team:'Nissan Nissmo', pts:10, fl:false, pole:false, note:'+48.722'},
    {pos:6, name:'Gui', team:'Renault Sport Formula 2 Team', pts:8, fl:false, pole:false, note:'+54.042'},
    {pos:7, name:'AO', team:'BMW Sauber F2 Team', pts:6, fl:false, pole:false, note:'+87.996'},
    {pos:8, name:'EXO_Kyo', team:'Aero Apex Racing F2', pts:4, fl:false, pole:false, note:'+95.928'},
    {pos:9, name:'dante', team:'Tarigy\'s Motorsport Team F2', pts:2, fl:false, pole:false, note:'+1 Lap'},
    {pos:10, name:'Fb', team:'Aero Apex Racing F2', pts:1, fl:false, pole:false, note:'+1 Lap'}
  ],
  '14-f2': [
    {pos:1, name:'Crocs', team:'Carti Racing Association', pts:25, fl:false, pole:false, gap:'Leader', note:''},
    {pos:2, name:'Juantoes', team:'Carti Racing Association', pts:21, fl:true, pole:true, gap:'+2.466', note:'Pole · Fastest Lap'},
    {pos:3, name:'Skirmis', team:'LM Performance F2', pts:15, fl:false, pole:false, gap:'+8.517', note:''},
    {pos:4, name:'Gamrin', team:'Renault Sport Formula 2 Team', pts:12, fl:false, pole:false, gap:'+12.716', note:''},
    {pos:5, name:'MessiplaysF1', team:'LM Performance F2', pts:10, fl:false, pole:false, gap:'+19.766', note:'10s Pen'},
    {pos:6, name:'yokesecapo', team:'GlitchGP F2 Team', pts:8, fl:false, pole:false, gap:'+21.448', note:''},
    {pos:7, name:'Alien', team:'Nissan Nissmo', pts:6, fl:false, pole:false, gap:'+27.799', note:'10s Pen'},
    {pos:8, name:'Bence', team:'GlitchGP F2 Team', pts:4, fl:false, pole:false, gap:'+36.215', note:''},
    {pos:9, name:'Gui', team:'Renault Sport Formula 2 Team', pts:2, fl:false, pole:false, gap:'+37.465', note:'10s Pen'},
    {pos:10, name:'Vittorioso', team:'Nissan Nissmo', pts:1, fl:false, pole:false, gap:'+46.481', note:''},
    {pos:11, name:'ZAYN', team:'AF Corsa', pts:0, fl:false, pole:false, gap:'+1 Lap', note:''},
    {pos:12, name:'EXO_Kyo', team:'Aero Apex Racing F2', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:13, name:'Lewis', team:'Vanguard Sabre Racing', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'}
  ]
};

// ================= F3 =================
const F3_LINEUPS = window.VMS_LINEUPS.f3;

const F3_STANDINGS = {
  drivers: [
    {name:'Piko', code:'MD1', team:'LMP', pts:240, wins:0, pods:0, dnf:0, pos:1, gap:'0', form:[]},
    {name:'Jeffz', code:'MD3', team:'LMP', pts:178, wins:0, pods:0, dnf:0, pos:2, gap:'-62', form:[]},
    {name:'Ukkiett', code:'MD1', team:'Carti Racing Association', pts:131, wins:0, pods:0, dnf:0, pos:3, gap:'-109', form:[]},
    {name:'Bartos', code:'MD3', team:'Pola Sabre Motorsports', pts:102, wins:0, pods:0, dnf:0, pos:4, gap:'-138', form:[]},
    {name:'Ukizi', code:'RD1', team:'LMP', pts:76, wins:0, pods:0, dnf:0, pos:5, gap:'-164', form:[]},
    {name:'Dark Shadow', code:'MD1', team:'Pola Sabre Motorsports', pts:75, wins:0, pods:0, dnf:0, pos:6, gap:'-165', form:[]},
    {name:'Fabián', code:'MD1', team:'Tarigy’s Motorsport Team F3', pts:65, wins:0, pods:0, dnf:0, pos:7, gap:'-175', form:[]},
    {name:'Lancelot', code:'MD2', team:'Tarigy’s Motorsport Team F3', pts:54, wins:0, pods:0, dnf:0, pos:8, gap:'-186', form:[]},
    {name:'Peters', code:'—', team:'Tarigy’s Motorsport Team F3', pts:50, wins:0, pods:0, dnf:0, pos:9, gap:'-190', form:[]},
    {name:'Jardin', code:'MD2', team:'LMP', pts:39, wins:0, pods:0, dnf:0, pos:10, gap:'-201', form:[]},
    {name:'Shadow Rex', code:'—', team:'', pts:28, wins:0, pods:0, dnf:0, pos:11, gap:'-212', form:[]},
    {name:'Maldonado', code:'—', team:'Tarigy’s Motorsport Team F3', pts:21, wins:0, pods:0, dnf:0, pos:12, gap:'-219', form:[]},
    {name:'YellowRice', code:'—', team:'Renault Sport Formula 3 Team', pts:21, wins:0, pods:0, dnf:0, pos:13, gap:'-219', form:[]},
    {name:'Ageftyg2', code:'—', team:'', pts:20, wins:0, pods:0, dnf:0, pos:14, gap:'-220', form:[]},
    {name:'SCKIBLES', code:'—', team:'GlitchGP F3', pts:20, wins:0, pods:0, dnf:0, pos:15, gap:'-220', form:[]},
    {name:'Syxe', code:'MD3', team:'GlitchGP F3', pts:15, wins:0, pods:0, dnf:0, pos:16, gap:'-225', form:[]},
    {name:'Ellie', code:'MD1', team:'Kogun Technologies F3 Team', pts:14, wins:0, pods:0, dnf:0, pos:17, gap:'-226', form:[]},
    {name:'Bobby', code:'—', team:'', pts:10, wins:0, pods:0, dnf:0, pos:18, gap:'-230', form:[]},
    {name:'Piti', code:'MD1', team:'Anonymous Juniors', pts:10, wins:0, pods:0, dnf:0, pos:19, gap:'-230', form:[]},
    {name:'Wibz', code:'MD2', team:'Carti Racing Association', pts:10, wins:0, pods:0, dnf:0, pos:20, gap:'-230', form:[]},
    {name:'Kriekel', code:'RD1', team:'LMP', pts:10, wins:0, pods:0, dnf:0, pos:21, gap:'-230', form:[]},
    {name:'Maslo', code:'MD3', team:'Aston Martin Racing F3', pts:8, wins:0, pods:0, dnf:0, pos:22, gap:'-232', form:[]},
    {name:'Halo', code:'MD2', team:'Anonymous Juniors', pts:4, wins:0, pods:0, dnf:0, pos:23, gap:'-236', form:[]},
    {name:'LJS', code:'MD3', team:'Anonymous Juniors', pts:3, wins:0, pods:0, dnf:0, pos:24, gap:'-237', form:[]},
    {name:'Lance', code:'MD3', team:'Aston Martin Racing F3', pts:2, wins:0, pods:0, dnf:0, pos:25, gap:'-238', form:[]},
    {name:'Bence', code:'MD2', team:'GlitchGP F3', pts:2, wins:0, pods:0, dnf:0, pos:26, gap:'-238', form:[]},
    {name:'Dante', code:'—', team:'', pts:1, wins:0, pods:0, dnf:0, pos:27, gap:'-239', form:[]}
  ],
  constructors: [
    {name:'LMP', color:'#a78bfa', pts:528, pos:1},
    {name:'Tarigy’s Motorsport Team F3', color:'#7b2cbf', pts:233, pos:2},
    {name:'Pola Sabre Motorsports', color:'#22b8d6', pts:162, pos:3},
    {name:'Carti Racing Association', color:'#555555', pts:155, pos:4},
    {name:'Renault Sport Formula 3 Team', color:'#d9a300', pts:111, pos:5},
    {name:'Aston Martin Racing F3', color:'#1f6b3a', pts:79, pos:6},
    {name:'GlitchGP F3', color:'#8e3bb5', pts:51, pos:7},
    {name:'Aero Apex Racing F3', color:'#2496d2', pts:34, pos:8},
    {name:'Kogun Technologies F3 Team', color:'#2496d2', pts:18, pos:9},
    {name:'Anonymous Juniors', color:'#dc143c', pts:13, pos:10}
  ]
};

const F3_RESULTS = {
  '02-f3': [
    {pos:1, name:'PradX', team:'LMP', pts:21, fl:false, pole:true, note:''},
    {pos:2, name:'Ukizi', team:'LMP', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Piko', team:'LMP', pts:16, fl:false, pole:false, note:''},
    {pos:4, name:'Peters', team:'Tarigy\'s Motorsport Team', pts:14, fl:false, pole:false, note:''},
    {pos:5, name:'Bartos', team:'Aero Apex Racing F3', pts:14, fl:true, pole:false, note:''},
    {pos:6, name:'YellowR1ce', team:'Renault Sport Formula 1 Team F3', pts:10, fl:false, pole:false, note:''},
    {pos:7, name:'Swixks', team:'Carti Racing Association F3', pts:8, fl:false, pole:false, note:''},
    {pos:8, name:'Fabián', team:'Renault Sport Formula 1 Team F3', pts:6, fl:false, pole:false, note:''},
    {pos:9, name:'Chonki', team:'Renault Sport Formula 1 Team F3', pts:4, fl:false, pole:false, note:''}
  ],
  '03-f3': [
    {pos:1, name:'Piko', team:'LMP', pts:20, fl:false, pole:false, note:''},
    {pos:2, name:'DOA', team:'Tarigy\'s Motorsport Team', pts:18, fl:false, pole:false, note:''},
    {pos:3, name:'Fabián', team:'Renault Sport Formula 1 Team F3', pts:16, fl:false, pole:false, note:''},
    {pos:4, name:'Peters', team:'Tarigy\'s Motorsport Team', pts:15, fl:true, pole:false, note:''},
    {pos:5, name:'PradX', team:'LMP', pts:12, fl:false, pole:false, note:''},
    {pos:6, name:'Chonki', team:'Renault Sport Formula 1 Team F3', pts:10, fl:false, pole:false, note:''},
    {pos:7, name:'Ukizi', team:'LMP', pts:8, fl:false, pole:false, note:'LMP driver'}
  ],
  '04-f3': [
    {pos:1, name:'Jeffz', team:'Cassien Motorsport F3', pts:20, fl:false, pole:false, note:''},
    {pos:2, name:'Piko', team:'LMP', pts:19, fl:false, pole:true, note:''},
    {pos:3, name:'Dark Shadow', team:'Pola Sabre Motorsports', pts:18, fl:true, pole:false, note:''},
    {pos:4, name:'PradX', team:'LMP', pts:14, fl:false, pole:false, note:''},
    {pos:5, name:'ukkiett', team:'Carti Racing Association F3', pts:12, fl:false, pole:false, note:''},
    {pos:6, name:'Bartos', team:'Aero Apex Racing F3', pts:10, fl:false, pole:false, note:''},
    {pos:7, name:'ShadowRex', team:'Tarigy\'s Motorsport Team', pts:8, fl:false, pole:false, note:''},
    {pos:8, name:'Fabián', team:'Isreal Racing Point F3', pts:6, fl:false, pole:false, note:''},
    {pos:9, name:'Ukizi', team:'LMP', pts:4, fl:false, pole:false, note:''},
    {pos:10, name:'Nath', team:'Monster Motorsports F3', pts:2, fl:false, pole:false, note:''},
    {pos:11, name:'Boby', team:'Monster Motorsports F3', pts:0, fl:false, pole:false, note:''},
    {pos:12, name:'Davis', team:'Carti Racing Association F3', pts:0, fl:false, pole:false, note:''},
    {pos:13, name:'Peters', team:'Tarigy\'s Motorsport Team', pts:0, fl:false, pole:false, note:''},
    {pos:14, name:'Fred', team:'Cassien Motorsport F3', pts:0, fl:false, pole:false, note:''},
    {pos:15, name:'Inert', team:'Anonymous Juniors', pts:0, fl:false, pole:false, note:''}
  ],
  '05-f3': [
    {pos:1, name:'Maldonado', team:'Tarigy\'s Motorsport Team', pts:21, fl:false, pole:true, note:''},
    {pos:2, name:'Piko', team:'LMP', pts:20, fl:true, pole:false, note:''},
    {pos:3, name:'Peters', team:'Tarigy\'s Motorsport Team', pts:16, fl:false, pole:false, note:''},
    {pos:4, name:'gabriel', team:'Pola Sabre Motorsports', pts:14, fl:false, pole:false, note:''},
    {pos:5, name:'Jeffz', team:'Cassien Motorsport F3', pts:12, fl:false, pole:false, note:''},
    {pos:6, name:'Trim', team:'Isreal Racing Point F3', pts:10, fl:false, pole:false, note:''},
    {pos:7, name:'Ukizi', team:'LMP', pts:8, fl:false, pole:false, note:''},
    {pos:8, name:'ukkiett', team:'Carti Racing Association F3', pts:6, fl:false, pole:false, note:''},
    {pos:9, name:'PradX', team:'LMP', pts:4, fl:false, pole:false, note:''},
    {pos:10, name:'Lance', team:'Cassien Motorsport F3', pts:2, fl:false, pole:false, note:''},
    {pos:11, name:'ellie', team:'Chonkebee Racing F3', pts:0, fl:false, pole:false, note:''},
    {pos:12, name:'Bartos', team:'Aero Apex Racing F3', pts:0, fl:false, pole:false, note:''},
    {pos:13, name:'Nath', team:'Monster Motorsports F3', pts:0, fl:false, pole:false, note:''},
    {pos:14, name:'Ajp', team:'Pola Sabre Motorsports', pts:0, fl:false, pole:false, note:''},
    {pos:15, name:'Fabián', team:'Isreal Racing Point F3', pts:0, fl:false, pole:false, note:''},
    {pos:16, name:'Gambia_pole', team:'Pola Sabre Motorsports', pts:0, fl:false, pole:false, note:''},
    {pos:17, name:'Weee', team:'GlitchGP', pts:0, fl:false, pole:false, note:''},
    {pos:18, name:'Inert', team:'Anonymous Juniors', pts:0, fl:false, pole:false, note:''},
    {pos:19, name:'Swixks', team:'Carti Racing Association F3', pts:0, fl:false, pole:false, note:''}
  ],
  '06-f3': [
    {pos:1, name:'Ukizi', team:'LMP', pts:22, fl:false, pole:true, note:''},
    {pos:2, name:'Jeffz', team:'Cassien Motorsport F3', pts:19, fl:true, pole:false, note:''},
    {pos:3, name:'Piko', team:'LMP', pts:16, fl:false, pole:false, note:''},
    {pos:4, name:'PradX', team:'LMP', pts:14, fl:false, pole:false, note:''},
    {pos:5, name:'ShadowRex', team:'Tarigy\'s Motorsport Team', pts:12, fl:false, pole:false, note:''},
    {pos:6, name:'ukkiett', team:'Carti Racing Association F3', pts:10, fl:false, pole:false, note:''},
    {pos:7, name:'shawn', team:'Isreal Racing Point F3', pts:6, fl:false, pole:false, note:''},
    {pos:8, name:'ellie', team:'Chonkebee Racing F3', pts:4, fl:false, pole:false, note:''},
    {pos:9, name:'Trim', team:'Isreal Racing Point F3', pts:2, fl:false, pole:false, note:''},
    {pos:10, name:'Fabián', team:'Isreal Racing Point F3', pts:0, fl:false, pole:false, note:''},
    {pos:11, name:'Jsko', team:'Chonkebee Racing F3', pts:0, fl:false, pole:false, note:''},
    {pos:12, name:'Jimmy', team:'Pola Sabre Motorsports', pts:0, fl:false, pole:false, note:''},
    {pos:13, name:'Ajp', team:'Pola Sabre Motorsports', pts:0, fl:false, pole:false, note:''},
    {pos:14, name:'Peters', team:'Tarigy\'s Motorsport Team', pts:0, fl:false, pole:false, note:''},
    {pos:15, name:'Swixks', team:'Carti Racing Association F3', pts:0, fl:false, pole:false, note:''}
  ],
  '07-f3': [
    {pos:1, name:'Jeffz', team:'Cassien Motorsport F3', pts:20, fl:false, pole:false, note:''},
    {pos:2, name:'Piko', team:'LMP', pts:19, fl:false, pole:true, note:'+6.699'},
    {pos:3, name:'Dark Shadow', team:'Pola Sabre Motorsports', pts:18, fl:true, pole:false, note:'+9.999'},
    {pos:4, name:'PradX', team:'LMP', pts:14, fl:false, pole:false, note:'+15.925'},
    {pos:5, name:'ukkiett', team:'Carti Racing Association F3', pts:12, fl:false, pole:false, note:'+21.632'},
    {pos:6, name:'Bartos', team:'Aero Apex Racing F3', pts:10, fl:false, pole:false, note:'+32.882'},
    {pos:7, name:'ShadowRex', team:'Tarigy\'s Motorsport Team', pts:8, fl:false, pole:false, note:'+39.198'},
    {pos:8, name:'Fabián', team:'Isreal Racing Point F3', pts:6, fl:false, pole:false, note:'+39.431'},
    {pos:9, name:'Ukizi', team:'LMP', pts:4, fl:false, pole:false, note:'+46.967'},
    {pos:10, name:'Nath', team:'Monster Motorsports F3', pts:2, fl:false, pole:false, note:'+55.047'},
    {pos:11, name:'Boby', team:'Monster Motorsports F3', pts:0, fl:false, pole:false, note:'+93.229'},
    {pos:12, name:'Davis', team:'Carti Racing Association F3', pts:0, fl:false, pole:false, note:''},
    {pos:13, name:'Peters', team:'Tarigy\'s Motorsport Team', pts:0, fl:false, pole:false, note:''},
    {pos:14, name:'Fred', team:'Cassien Motorsport F3', pts:0, fl:false, pole:false, note:''},
    {pos:15, name:'Inert', team:'Anonymous Juniors', pts:0, fl:false, pole:false, note:''}
  ],
  '08-f3': [
    {pos:1, name:'Ageftyg2', team:'Isreal Racing Point F3', pts:20, fl:false, pole:false, note:''},
    {pos:2, name:'Peters', team:'Tarigy\'s Motorsport Team', pts:20, fl:true, pole:false, note:''},
    {pos:3, name:'Piko', team:'LMP', pts:17, fl:false, pole:true, note:''},
    {pos:4, name:'ukkiett', team:'Carti Racing Association F3', pts:14, fl:false, pole:false, note:''},
    {pos:5, name:'Ukizi', team:'LMP', pts:12, fl:false, pole:false, note:''},
    {pos:6, name:'Boby', team:'Monster Motorsports F3', pts:10, fl:false, pole:false, note:''},
    {pos:7, name:'Lancelot', team:'Tarigy\'s Motorsport Team', pts:8, fl:false, pole:false, note:''},
    {pos:8, name:'ellie', team:'Chonkebee Racing F3', pts:6, fl:false, pole:false, note:''},
    {pos:9, name:'Halo', team:'GlitchGP', pts:4, fl:false, pole:false, note:'+1 Lap'},
    {pos:10, name:'Fabián', team:'Isreal Racing Point F3', pts:2, fl:false, pole:false, note:'+1 Lap'},
    {pos:11, name:'Davis', team:'Carti Racing Association F3', pts:0, fl:false, pole:false, note:'+1 Lap'},
    {pos:12, name:'Fred', team:'GlitchGP', pts:0, fl:false, pole:false, note:''}
  ],
  '09-f3': [
    {pos:1, name:'Jeffz', team:'LM Performance F3', pts:27, fl:true, pole:false, gap:'Leader', note:''},
    {pos:2, name:'Piko', team:'LM Performance F3', pts:19, fl:false, pole:true, gap:'+0.132', note:''},
    {pos:3, name:'Fabián', team:'Tarigy\'s Motorsport Team F3', pts:15, fl:false, pole:false, gap:'+8.115', note:''},
    {pos:4, name:'Dark Shadow', team:'Pola Sabre Motorsports', pts:12, fl:false, pole:false, gap:'+10.994', note:'6s Penalty'},
    {pos:5, name:'Piti', team:'Anonymous Juniors', pts:10, fl:false, pole:false, gap:'+12.119', note:''},
    {pos:6, name:'ellie', team:'Kogun Technologies F3 Team', pts:8, fl:false, pole:false, gap:'+12.743', note:'5s Penalty'},
    {pos:7, name:'Jardin', team:'LM Performance F3', pts:6, fl:false, pole:false, gap:'+17.265', note:'11s Penalty'},
    {pos:8, name:'Bartos', team:'Pola Sabre Motorsports', pts:4, fl:false, pole:false, gap:'+17.750', note:'10s Penalty'},
    {pos:9, name:'LJS', team:'Anonymous Juniors', pts:2, fl:false, pole:false, gap:'+28.280s', note:''},
    {pos:10, name:'Jimmy', team:'Pola Sabre Motorsports', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:11, name:'Maslo', team:'Aston Martin Racing F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:12, name:'Tta', team:'Aston Martin Racing F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:13, name:'Mikey', team:'Aston Martin Racing F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:14, name:'Fred', team:'GlitchGP F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:15, name:'SilentZ', team:'', pts:0, fl:false, pole:false, gap:'DNS', note:'DNS'},
    {pos:16, name:'Halo', team:'Anonymous Juniors', pts:0, fl:false, pole:false, gap:'DNS', note:'DNS'}
  ],
  '10-f3': [
    {pos:1, name:'Piko', team:'LM Performance F3', pts:28, fl:true, pole:true, gap:'Leader', note:''},
    {pos:2, name:'Ukkiett', team:'Carti Racing Association F3', pts:18, fl:false, pole:false, gap:'+7.410', note:''},
    {pos:3, name:'Bartos', team:'Pola Sabre Motorsports', pts:15, fl:false, pole:false, gap:'+8.333', note:''},
    {pos:4, name:'Dark Shadow', team:'Pola Sabre Motorsports', pts:12, fl:false, pole:false, gap:'+8.483', note:''},
    {pos:5, name:'Lancelot', team:'Tarigy\'s Motorsport Team F3', pts:10, fl:false, pole:false, gap:'+14.091', note:''},
    {pos:6, name:'Kriekel', team:'LM Performance F3', pts:8, fl:false, pole:false, gap:'+30.106', note:''},
    {pos:7, name:'Fabián', team:'Tarigy\'s Motorsport Team F3', pts:6, fl:false, pole:false, gap:'+30.508', note:''},
    {pos:8, name:'Rice', team:'Renault Sport Formula 3 Team', pts:4, fl:false, pole:false, gap:'+46.782', note:'5s Pen'},
    {pos:9, name:'syxe', team:'GlitchGP F3', pts:2, fl:false, pole:false, gap:'+1 Lap', note:'5s Pen'},
    {pos:10, name:'LJS', team:'Anonymous Juniors', pts:1, fl:false, pole:false, gap:'+1 Lap', note:''},
    {pos:11, name:'Jardin', team:'LM Performance F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:12, name:'Maslo', team:'Aston Martin Racing F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:13, name:'Piti', team:'Anonymous Juniors', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:14, name:'El_Manco010', team:'Tarigy\'s Motorsport Team F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:15, name:'Spring', team:'', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:16, name:'Boby', team:'Fast Line Motorsport F3 Team', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:17, name:'Mikey', team:'Aston Martin Racing F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:18, name:'Elden', team:'Aero Apex Racing F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:19, name:'FTL', team:'Renault Sport Formula 3 Team', pts:0, fl:false, pole:false, gap:'DSQ', note:'DSQ'},
    {pos:20, name:'OSHIO', team:'', pts:0, fl:false, pole:false, gap:'DSQ', note:'DSQ'}
  ],
  '11-f3': [
    {pos:1, name:'Jeffz', team:'LM Performance F3', pts:28, fl:true, pole:true, gap:'Leader', note:''},
    {pos:2, name:'Bartos', team:'Pola Sabre Motorsports', pts:18, fl:false, pole:false, gap:'+7.083', note:''},
    {pos:3, name:'Ukkiett', team:'Carti Racing Association F3', pts:15, fl:false, pole:false, gap:'+10.516', note:''},
    {pos:4, name:'Lancelot', team:'Tarigy\'s Motorsport Team F3', pts:12, fl:false, pole:false, gap:'+10.702', note:''},
    {pos:5, name:'Piko', team:'LM Performance F3', pts:10, fl:false, pole:false, gap:'+11.367', note:''},
    {pos:6, name:'SCKIBLES', team:'GlitchGP F3', pts:8, fl:false, pole:false, gap:'+15.400', note:''},
    {pos:7, name:'Fabián', team:'Tarigy\'s Motorsport Team F3', pts:6, fl:false, pole:false, gap:'+20.832', note:''},
    {pos:8, name:'Jardin', team:'LM Performance F3', pts:4, fl:false, pole:false, gap:'+29.048', note:''},
    {pos:9, name:'Rice', team:'Renault Sport Formula 3 Team', pts:2, fl:false, pole:false, gap:'+37.632', note:'10s Pen'},
    {pos:10, name:'Avdla', team:'Kogun Technologies F3 Team', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:11, name:'Maslo', team:'Aston Martin Racing F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:12, name:'GASLY', team:'GlitchGP F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:13, name:'syxe', team:'GlitchGP F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:14, name:'Mikey', team:'Aston Martin Racing F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:15, name:'Piti', team:'Anonymous Juniors', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:16, name:'Elf', team:'Pola Sabre Motorsports', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'}
  ],
  '12-f3': [
    {pos:1, name:'Jardin', team:'LM Performance F3', pts:27, fl:1, pole:0, note:'Leader · 43:28.905'},
    {pos:2, name:'ukkiett', team:'Carti Racing Association F3', pts:19, fl:0, pole:0, note:'+0.579'},
    {pos:3, name:'Piko', team:'LM Performance F3', pts:15, fl:0, pole:0, note:'+0.850'},
    {pos:4, name:'syxe', team:'GlitchGP F3', pts:12, fl:0, pole:0, note:'+4.662'},
    {pos:5, name:'Lancelot', team:'Tarigy\'s Motorsport Team F3', pts:10, fl:0, pole:1, note:'+4.713'},
    {pos:6, name:'Kriekel', team:'LM Performance F3', pts:8, fl:0, pole:0, note:'+7.266'},
    {pos:7, name:'Bartos', team:'Pola Sabre Motorsports', pts:6, fl:0, pole:0, note:'+10.066'},
    {pos:8, name:'SCKIBLES', team:'GlitchGP F3', pts:4, fl:0, pole:0, note:'+13.516'},
    {pos:9, name:'Maslo', team:'Aston Martin Racing F3', pts:2, fl:0, pole:0, note:'+20.583 · 10s Pen'},
    {pos:10, name:'Rice', team:'Renault Sport Formula 3 Team', pts:1, fl:0, pole:0, note:'+20.635 · 10s Pen'},
    {pos:11, name:'Elf', team:'Pola Sabre Motorsports', pts:0, fl:0, pole:0, note:'+1 Lap'},
    {pos:12, name:'Tta', team:'Aston Martin Racing F3', pts:0, fl:0, pole:0, note:'+1 Lap'},
    {pos:13, name:'Avda', team:'Kogun Technologies F3 Team', pts:0, fl:0, pole:0, note:'DNF'},
    {pos:14, name:'Hakeman', team:'GlitchGP F3', pts:0, fl:0, pole:0, note:'DNF'},
    {pos:15, name:'Bleh', team:'', pts:0, fl:0, pole:0, note:'DNF'},
    {pos:16, name:'Luquitas1810', team:'', pts:0, fl:0, pole:0, note:'DNF'},
    {pos:17, name:'Wibz', team:'Carti Racing Association F3', pts:0, fl:0, pole:0, note:'DNF'},
    {pos:18, name:'brick', team:'', pts:0, fl:0, pole:0, note:'DNS'}
  ],
  '13-f3': [
    {pos:1, name:'Jeffz', team:'LM Performance F3', pts:12, fl:false, pole:false, gap:'Leader', note:''},
    {pos:2, name:'Bartos', team:'Pola Sabre Motorsports', pts:25, fl:false, pole:false, gap:'+0.294', note:''},
    {pos:3, name:'Dark Shadow', team:'Pola Sabre Motorsports', pts:18, fl:false, pole:false, gap:'+1.433', note:''},
    {pos:4, name:'Piko', team:'LM Performance F3', pts:18, fl:true, pole:true, gap:'+3.583', note:'Fastest Lap · Pole'},
    {pos:5, name:'Wibz', team:'Carti Racing Association F3', pts:10, fl:false, pole:false, gap:'+10.208', note:''},
    {pos:6, name:'Fabián', team:'Tarigy\'s Motorsport Team F3', pts:10, fl:false, pole:false, gap:'+10.750', note:''},
    {pos:7, name:'ukkiett', team:'Carti Racing Association F3', pts:8, fl:false, pole:false, gap:'+13.116', note:''},
    {pos:8, name:'Lancelot', team:'Tarigy\'s Motorsport Team F3', pts:6, fl:false, pole:false, gap:'+13.283', note:''},
    {pos:9, name:'Bence', team:'GlitchGP F3', pts:2, fl:false, pole:false, gap:'+16.686', note:''},
    {pos:10, name:'syxe', team:'GlitchGP F3', pts:1, fl:false, pole:false, gap:'+29.099', note:''},
    {pos:11, name:'Maslo', team:'Aston Martin Racing F3', pts:0, fl:false, pole:false, gap:'+52.665', note:''},
    {pos:12, name:'Rice', team:'Renault Sport Formula 3 Team', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:13, name:'Kashin', team:'BMW Sauber F3 Team', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:14, name:'Hakeman', team:'GlitchGP F3', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:15, name:'Genghis', team:'BMW Sauber F3 Team', pts:0, fl:false, pole:false, gap:'DNF', note:'DNF'},
    {pos:16, name:'Bleh', team:'', pts:0, fl:false, pole:false, gap:'DNS', note:'DNS'},
    {pos:17, name:'Roven', team:'BMW Sauber F3 Team', pts:0, fl:false, pole:false, gap:'DNS', note:'DNS'}
  ],
  '14-f3': [
    {pos:1, name:'Jeffz', team:'LM Performance F3', pts:27, fl:true, pole:false, gap:'Leader', note:'Fastest Lap'},
    {pos:2, name:'ukkiett', team:'Carti Racing Association F3', pts:19, fl:false, pole:true, gap:'+0.252', note:'Pole'},
    {pos:3, name:'Piko', team:'LM Performance F3', pts:15, fl:false, pole:false, gap:'+5.900', note:''},
    {pos:4, name:'Bartos', team:'Pola Sabre Motorsports', pts:12, fl:false, pole:false, gap:'+9.833', note:''},
    {pos:5, name:'Lancelot', team:'Tarigy\'s Motorsport Team F3', pts:10, fl:false, pole:false, gap:'+10.583', note:''},
    {pos:6, name:'SCKIBLES', team:'GlitchGP F3', pts:8, fl:false, pole:false, gap:'+11.733', note:''},
    {pos:7, name:'Maslo', team:'Aston Martin Racing F3', pts:6, fl:false, pole:false, gap:'+16.916', note:''},
    {pos:8, name:'Rice', team:'Renault Sport Formula 3 Team', pts:4, fl:false, pole:false, gap:'+25.533', note:''},
    {pos:9, name:'Kriekel', team:'LM Performance F3', pts:2, fl:false, pole:false, gap:'+39.648', note:''},
    {pos:10, name:'dante', team:'Tarigy\'s Motorsport Team F3', pts:1, fl:false, pole:false, gap:'+52.610', note:''},
    {pos:11, name:'Avda', team:'Kogun Technologies F3 Team', pts:0, fl:false, pole:false, gap:'+58.998', note:''},
    {pos:12, name:'Piti', team:'Anonymous Juniors', pts:0, fl:false, pole:false, gap:'+59.398', note:''},
    {pos:13, name:'Bleh', team:'Kogun Technologies F3 Team', pts:0, fl:false, pole:false, gap:'+73.166', note:''},
    {pos:14, name:'Chicken_Bake', team:'GlitchGP F3', pts:0, fl:false, pole:false, gap:'+87.396', note:''},
    {pos:15, name:'Kashin', team:'BMW Sauber F3 Team', pts:0, fl:false, pole:false, gap:'+89.097', note:'10s Pen'}
  ]
};

// ================= GENERAL =================
const D = {
  social: {discord:'https://discord.gg/UdmuUAk2pj', youtube:'https://www.youtube.com/@VMS_1'},
  races: [
    {rnd:'01', name:'Italian Grand Prix', circuit:'Autodromo Nazionale Monza', satDate:'Jun 27', sunDate:'Jun 28', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇮🇹', flagCode:'it'},
    {rnd:'02', name:'Canadian Grand Prix', circuit:'Circuit Gilles Villeneuve', satDate:'Jul 4', sunDate:'Jul 5', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇨🇦', flagCode:'ca'},
    {rnd:'03', name:'Las Vegas Grand Prix', circuit:'Las Vegas Strip Circuit', satDate:'Jul 11', sunDate:'Jul 12', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇺🇸', flagCode:'us'},
    {rnd:'04', name:'Azerbaijan Grand Prix', circuit:'Baku City Circuit', satDate:'Jul 18', sunDate:'Jul 19', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇦🇿', flagCode:'az'},
    {rnd:'05', name:'Belgian Grand Prix', circuit:'Circuit de Spa-Francorchamps', satDate:'Jul 25', sunDate:'Jul 26', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇧🇪', flagCode:'be'},
    {rnd:'06', name:'Hungarian Grand Prix / French Grand Prix', circuit:'Hungaroring / Circuit de Paul Ricard', satDate:'Aug 1', sunDate:'Aug 2', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇭🇺/🇫🇷', flagCode:'hu'},
    {rnd:'07', name:'Emilia Romagna Grand Prix', circuit:'Autodromo Internazionale Enzo e Dino Ferrari', satDate:'Aug 8', sunDate:'Aug 9', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇮🇹', flagCode:'it'},
    {rnd:'BREAK', name:'Season Break & Signing Window', circuit:'MID-SEASON BREAK AND SIGNING WINDOW', satDate:'', sunDate:'', status:'break', series:[], flag:'', flagCode:''},
    {rnd:'08', name:'Hockenheim GP', circuit:'Hockenheimring Baden-Württemberg', satDate:'Aug 15', sunDate:'Aug 16', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇩🇪', flagCode:'de'},
    {rnd:'09', name:'Monaco Grand Prix', circuit:'Circuit de Monaco', satDate:'Aug 29', sunDate:'Aug 30', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇲🇨', flagCode:'mc'},
    {rnd:'10', name:'Russian Grand Prix', circuit:'Sochi Autodrom', satDate:'Sep 5', sunDate:'Sep 6', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇷🇺', flagCode:'ru'},
    {rnd:'11', name:'Qatar Grand Prix', circuit:'Lusail International Circuit', satDate:'Sep 12', sunDate:'Sep 13', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇶🇦', flagCode:'qa'},
    {rnd:'12', name:'United States Grand Prix', circuit:'Circuit of the Americas', satDate:'Sep 19', sunDate:'Sep 20', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇺🇸', flagCode:'us'},
    {rnd:'13', name:'São Paulo Grand Prix', circuit:'Autódromo José Carlos Pace', satDate:'Sep 26', sunDate:'Sep 27', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇧🇷', flagCode:'br'},
    {rnd:'14', name:'Singapore Grand Prix', circuit:'Marina Bay Street Circuit', satDate:'Oct 3', sunDate:'Oct 4', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇸🇬', flagCode:'sg'},
    {rnd:'15', name:'Mexico City Grand Prix', circuit:'Autódromo Hermanos Rodríguez', satDate:'Oct 17', sunDate:'Oct 18', status:'completed', series:['f1', 'f2', 'f3'], flag:'🇲🇽', flagCode:'mx'},
    {rnd:'16', name:'Austrian Grand Prix', circuit:'Red Bull Ring', satDate:'Oct 24', sunDate:'Oct 25', status:'upcoming', series:['f1', 'f2', 'f3'], flag:'🇦🇹', flagCode:'at'},
    {rnd:'17', name:'British Grand Prix', circuit:'Silverstone Circuit', satDate:'Oct 31', sunDate:'Nov 1', status:'upcoming', series:['f1', 'f2', 'f3'], flag:'🇬🇧', flagCode:'gb'},
    {rnd:'18', name:'Abu Dhabi Grand Prix', circuit:'Yas Marina Circuit', satDate:'Nov 7', sunDate:'Nov 8', status:'upcoming', series:['f1', 'f2', 'f3'], flag:'🇦🇪', flagCode:'ae'}
  ],
  sessions: {f1:{day:'Saturday', time:'11:00 AM EST'}, f2:{day:'Saturday', time:'1:00 PM EST'}, f3:{day:'Sunday', time:'11:00 AM EST'}},
  series: {f1:{label:'Formula 1', full:'VMS F1', badgeClass:'sd-f1', tag:'Pinnacle Series', teams:'12', people:'20', peopleLbl:'Drivers', rounds:'16', countries:'20+', desc:'Formula 1 is the pinnacle of motorsport, where the world\'s top drivers compete with sheer speed and technical excellence.'}, f2:{label:'Formula 2', full:'VMS F2', badgeClass:'sd-f2', tag:'Elite Development', teams:'10', people:'22', peopleLbl:'Drivers', rounds:'16', countries:'20+', desc:'The final step before Formula 1 — elite development racing that builds the next generation of VMS champions.'}, f3:{label:'Formula 3', full:'VMS F3', badgeClass:'sd-f3', tag:'Rising Stars', teams:'10', people:'30', peopleLbl:'Drivers', rounds:'16', countries:'20+', desc:'The entry point to VMS open-wheel racing, where rising stars begin their climb up the ladder.'}},
  points: {f1:[25, 18, 15, 12, 10, 8, 6, 4, 2, 1], f2:[25, 18, 15, 12, 10, 8, 6, 4, 2, 1], f3:[25, 18, 15, 12, 10, 8, 6, 4, 2, 1]},
  bonusFl: {f1:1, f2:2, f3:2},
  bonusPole: {f1:0, f2:1, f3:1},
  aliases: {f1:[['yktomms', 'yktomms the sequel'], ['arin', 'karazu arin'], ['daih_v', 'daih'], ['sun_rise', 'sunrise'], ['luddster', 'luddster (@luddestuttar)'], ['flare', 'flare (@dr_dapperbowtie)'], ['emirovic', 'emirović'], ['theo', 'theodorable'], ['gkf', 'gkf']], f2:[['igor', 'igorexe'], ['kyo', 'exo_kyo'], ['messi', 'messiplaysf1'], ['vittorio', 'vittorioso'], ['juan', 'juantoes'], ['wavee', 'wavee']], f3:[['yellowrice', 'yellowr1ce'], ['boby', 'bobby'], ['shadow rex', 'shadowrex'], ['fabian', 'fabián'], ['honor3d', 'honor3d (@aarnavs_shadow)']]},
  info: {f1:F1_LINEUPS, f2:F2_LINEUPS, f3:F3_LINEUPS},
  standings: {f1:F1_STANDINGS, f2:F2_STANDINGS, f3:F3_STANDINGS},
  results: {...F1_RESULTS, ...F2_RESULTS, ...F3_RESULTS}
};

const $ = id => document.getElementById(id);
const esc = s => String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const SERIES = ['f1','f2','f3'];
const LBL = {f1:'Formula 1',f2:'Formula 2',f3:'Formula 3'};
const FULL = {f1:'VMS F1',f2:'VMS F2',f3:'VMS F3'};
const real = D.races.filter(r=>r.status!=='break');
const MON = {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};

if($('lnkDiscord')){ $('lnkDiscord').href = D.social.discord; $('lnkYoutube').href = D.social.youtube; }
const QS = new URLSearchParams('');

/* ───────── dates (same logic as the VMS site: race weekend = Sat 11:00 AM EDT → end of race day) ───────── */
function parseDay(str,h,m,s){
  if(!str) return null; const p=str.trim().split(' '); if(p.length<2) return null;
  const mo=MON[p[0]], d=parseInt(p[1]); if(isNaN(d)||mo===undefined) return null;
  return new Date(Date.UTC(2026,mo,d,h,m||0,s||0));
}
const raceStart = r => parseDay(r.satDate,15);
function raceEnd(r){
  const sun=(r.sunDate||'').trim(); const ok=/^[A-Za-z]{3}\s+\d{1,2}$/.test(sun);
  return parseDay(ok?sun:r.satDate,27,59,59);
}
function nextRace(){
  const now=Date.now();
  return real.find(r=>{const e=raceEnd(r); return e?e.getTime()>now:r.status!=='completed';})||null;
}
const isLive = r => {const a=raceStart(r),b=raceEnd(r),n=Date.now(); return a&&b&&n>=a&&n<=b;};
const dates = r => r.satDate ? (r.sunDate&&r.sunDate!==r.satDate? r.satDate+' – '+r.sunDate : r.satDate) : '';
const rkey = (r,s) => r.rnd+'-'+s;

/* ───────── helpers: driver matching across name variants ───────── */
const alias = {};
SERIES.forEach(s=>{ alias[s]={}; (D.aliases[s]||[]).forEach(g=>g.forEach(n=>alias[s][n]=g[0])); });
function canon(s,name){
  let n=String(name||'').toLowerCase().trim();
  if(alias[s][n]) return alias[s][n];
  const stripped=n.replace(/\s*\(.*?\)\s*/g,'').trim();
  return alias[s][stripped]||stripped;
}
const lineupFor = (s,name) => {
  for(const t of (D.info[s]||[])) for(const dr of t.drivers) if(canon(s,dr.name)===canon(s,name)) return {...dr,teamName:t.name,color:t.color};
  return null;
};
const normTeam = n => String(n||'').toLowerCase().replace(/[’']/g,"'").replace(/\s*\(.*?\)\s*/g,'').trim();
function conFor(s,teamName){
  const list=D.standings[s].constructors, n=normTeam(teamName);
  return list.find(c=>normTeam(c.name)===n)||list.find(c=>normTeam(c.name).startsWith(n)||n.startsWith(normTeam(c.name)))||null;
}
/* ───────── results added through add-result.html (data/new-results.json) ─────────
   Each entry = one series + one round. They're layered on top of the hard-coded tables above:
   the race result is added, driver + constructor points are bumped, form dots are appended. */
(function applyNewResults(){
  const list=window.VMS_NEW_RESULTS; if(!Array.isArray(list)) return;
  list.forEach(e=>{
    const s=e&&e.series, race=real.find(r=>r.rnd===String(e&&e.rnd));
    if(!SERIES.includes(s)||!race||!Array.isArray(e.rows)||(!e.delete&&!e.rows.length)) return;
    const key=rkey(race,s);
    let replaced=false;
    if(D.results[key]){
      if(!e.replace){ console.warn('new-results.json: '+key+' already has results in app.js — skipped'); return; }
      // editing a built-in result: take the old points back out of the standings first
      replaced=true; const st0=D.standings[s];
      D.results[key].forEach(o=>{ const op=+o.pts||0; if(!op) return;
        const dv=st0.drivers.find(v=>canon(s,v.name)===canon(s,o.name)); if(dv) dv.pts=(+dv.pts||0)-op;
        const ct=o.team&&conFor(s,o.team); if(ct) ct.pts=(+ct.pts||0)-op; });
    }
    if(e.delete){ // remove a built-in result (its points were already taken back out above)
      if(!replaced) return;
      delete D.results[key];
      const stD=D.standings[s], topD=Math.max(0,...stD.drivers.map(d=>+d.pts||0));
      stD.drivers.sort((a,b)=>b.pts-a.pts).forEach((d,i)=>{d.pos=i+1; d.gap=String((+d.pts||0)-topD);});
      stD.constructors.sort((a,b)=>b.pts-a.pts).forEach((c,i)=>{c.pos=i+1;});
      return;
    }
    const rows=e.rows.map((x,i)=>({pos:+x.pos||i+1,name:x.name,team:x.team||'',pts:+x.pts||0,fl:!!x.fl,pole:!!x.pole,note:x.note||'',status:x.status||'',wccOnly:!!x.wccOnly,half:!!x.half,gap:x.gap||''}));
    (D.halfRaces=D.halfRaces||{})[key]=!!e.half;
    D.results[key]=rows; race.status='completed';
    const st=D.standings[s];
    rows.forEach(x=>{
      const c=canon(s,x.name), form=/^(DNF|DNS|DSq)$/i.test(x.status)?x.status:(x.pos===1?'W':String(x.pos));
      if(!x.wccOnly){
        let d=st.drivers.find(v=>canon(s,v.name)===c);
        if(!d){ const li=lineupFor(s,x.name); d={name:x.name,code:(li&&li.code)||'—',team:x.team,pts:0,wins:0,pods:0,dnf:0,pos:0,gap:'0',form:[]}; st.drivers.push(d); }
        d.pts=(+d.pts||0)+x.pts; if(x.team) d.team=x.team; if(!replaced) (d.form=d.form||[]).push(form);
      }
      if(x.team&&x.pts){
        let t=conFor(s,x.team);
        if(!t){ const li=(D.info[s]||[]).find(v=>normTeam(v.name)===normTeam(x.team)); t={name:x.team,color:(li&&li.color)||'#888888',pts:0,pos:0}; st.constructors.push(t); }
        t.pts=(+t.pts||0)+x.pts;
      }
    });
    const top=Math.max(0,...st.drivers.map(d=>+d.pts||0));
    st.drivers.sort((a,b)=>b.pts-a.pts).forEach((d,i)=>{d.pos=i+1; d.gap=String((+d.pts||0)-top);});
    st.constructors.sort((a,b)=>b.pts-a.pts).forEach((c,i)=>{c.pos=i+1;});
  });
})();

/* ───────── standings read from an image via add-standings.html (data/standings.json) ─────────
   Applied last, so it is the final word on points: whatever the image says replaces the points on the site.
   Drivers/teams that aren't in the image keep their points, unless the tool's "whole table" box was ticked
   (then they are hidden). Order = order in the image, so ties stay exactly as shown there. */
(function applyStandingsImage(){
  const all=window.VMS_STANDINGS; if(!all||typeof all!=='object') return;
  SERIES.forEach(s=>{
    const o=all[s]; if(!o) return; const st=D.standings[s];
    if(Array.isArray(o.drivers)&&o.drivers.length){
      const ord=new Map(), seen=new Set();
      o.drivers.forEach((x,i)=>{
        if(!x||!x.name) return; const c=canon(s,x.name); seen.add(c); ord.set(c,i);
        let d=st.drivers.find(v=>canon(s,v.name)===c);
        if(!d){ const li=lineupFor(s,x.name); d={name:x.name,code:(li&&li.code)||'—',team:x.team||(li&&li.teamName)||'',pts:0,wins:0,pods:0,dnf:0,pos:0,gap:'0',form:[]}; st.drivers.push(d); }
        d.pts=+x.pts||0; d.hidden=false; if(x.team) d.team=x.team;
      });
      if(o.driversFull) st.drivers.forEach(d=>{ if(!seen.has(canon(s,d.name))) d.hidden=true; });
      const rank=d=>{ const c=canon(s,d.name); return ord.has(c)?ord.get(c):1e9; };
      st.drivers.sort((a,b)=>(b.pts-a.pts)||(rank(a)-rank(b)));
      const vis=st.drivers.filter(d=>!d.hidden), top=Math.max(0,...vis.map(d=>+d.pts||0));
      vis.forEach((d,i)=>{d.pos=i+1; d.gap=String((+d.pts||0)-top);});
    }
    if(Array.isArray(o.constructors)&&o.constructors.length){
      const ord=new Map(), seen=new Set();
      o.constructors.forEach((x,i)=>{
        if(!x||!x.name) return; const n=normTeam(x.name); seen.add(n); ord.set(n,i);
        let c=conFor(s,x.name);
        if(!c){ const li=(D.info[s]||[]).find(v=>normTeam(v.name)===n); c={name:x.name,color:(li&&li.color)||'#888888',pts:0,pos:0}; st.constructors.push(c); }
        c.pts=+x.pts||0;
      });
      if(o.constructorsFull) st.constructors=st.constructors.filter(c=>seen.has(normTeam(c.name)));
      const rank=c=>{ const n=normTeam(c.name); return ord.has(n)?ord.get(n):1e9; };
      st.constructors.sort((a,b)=>(b.pts-a.pts)||(rank(a)-rank(b))).forEach((c,i)=>{c.pos=i+1;});
    }
  });
})();

function tabs(el,items,active,fn){
  el.innerHTML=items.map(([k,l])=>`<button class="tab${k===active?' on':''}" data-k="${k}">${esc(l)}</button>`).join('');
  el.onclick=e=>{const b=e.target.closest('.tab'); if(b) fn(b.dataset.k);};
}
function formDot(v){
  if(v===''||v==null) return '';
  const s=String(v); let c='';
  if(s==='W') c='w'; else if(s==='2'||s==='3') c='p'; else if(/^(DNF|DSq|DNS)/i.test(s)) c='x';
  return `<span class="fd ${c}">${esc(s)}</span>`;
}

/* ───────── hero stats ───────── */
(function(){
  if(!$('heroStats')) return;
  const drivers = SERIES.reduce((n,s)=>n+D.info[s].reduce((m,t)=>m+t.drivers.filter(d=>d.name&&d.name!=='—').length,0),0);
  const teams = SERIES.reduce((n,s)=>n+D.info[s].length,0);
  const done = real.filter(r=>r.status==='completed').length;
  $('heroStats').innerHTML=[[SERIES.length,'Championships'],[real.length,'Race Weekends'],[drivers+'',' Drivers'],[teams,'Teams']]
    .map(([n,l])=>`<div class="stat"><strong>${String(n).padStart(2,'0')}</strong><span>${l.trim()}</span></div>`).join('');
})();

/* ───────── next race + countdown ───────── */
function renderNext(){
  const box=$('nextBox'); if(!box) return;
  const r=nextRace();
  if(!r){ box.innerHTML='<div><div class="nb-label">Season Complete</div><div class="nb-name">Thanks for racing</div></div>'; return; }
  const start=raceStart(r), live=isLive(r);
  box.innerHTML=`<div><div class="nb-label">${live?'Race Weekend Live':'Next Race · Round '+esc(r.rnd)}</div>
  <div class="nb-name">${esc(r.flag)} ${esc(r.name)}</div>
  <div class="nb-meta">${esc(r.circuit)} · ${esc(dates(r))}</div></div>
  <div id="timer">${live?'<span class="live">● Live now</span>':''}</div>`;
  if(live) return;
  const tick=()=>{
    let t=Math.max(0,start-Date.now())/1000;
    const d=Math.floor(t/86400),h=Math.floor(t%86400/3600),m=Math.floor(t%3600/60),s=Math.floor(t%60);
    const el=$('timer'); if(!el) return;
    el.className='timer';
    el.innerHTML=[[d,'Days'],[h,'Hrs'],[m,'Min'],[s,'Sec']].map(([v,l])=>`<div><strong>${String(v).padStart(2,'0')}</strong><span>${l}</span></div>`).join('');
  };
  tick(); clearInterval(window._tk); window._tk=setInterval(tick,1000);
}

/* ───────── championships ───────── */
function renderSeriesCards(){
  if(!$('seriesCards')) return;
  $('seriesCards').innerHTML=SERIES.map(s=>{
    const m=D.series[s], drivers=D.info[s].reduce((n,t)=>n+t.drivers.filter(d=>d.name&&d.name!=='—').length,0);
    const rounds=real.filter(r=>(r.series||[]).includes(s)).length, st=D.sessions[s];
    return `<div class="card series-card"><div class="code">${s.toUpperCase()}</div>
    <div class="tier">${esc(m.tag)}</div><h3>${esc(m.full)}</h3><p>${esc(m.desc)}</p>
    <div class="mini"><div><strong>${D.info[s].length}</strong><span>Teams</span></div><div><strong>${drivers}</strong><span>Drivers</span></div><div><strong>${rounds}</strong><span>Rounds</span></div></div>
    <div class="sess">Race day: <b>${esc(st.day)} · ${esc(st.time)}</b></div></div>`;
  }).join('');
}

/* ───────── standings ───────── */
const st={series:SERIES.includes(QS.get('s'))?QS.get('s'):'f1',view:'drivers'};
function renderStandings(){
  if(!$('stBoard')) return;
  tabs($('stSeries'),SERIES.map(s=>[s,FULL[s]]),st.series,k=>{st.series=k;renderStandings();});
  tabs($('stView'),[['drivers','Drivers'],['constructors','Constructors']],st.view,k=>{st.view=k;renderStandings();});
  const data=D.standings[st.series];
  if(st.view==='drivers'){
    const list=data.drivers.filter(d=>!d.hidden).slice().sort((a,b)=>b.pts-a.pts);
    const top=list[0]?list[0].pts:0;
    const showStats=list.some(d=>d.wins||d.pods||d.dnf);
    $('stBoard').innerHTML=`<table><thead><tr><th>#</th><th>Driver</th><th>Team</th><th>Form</th>${showStats?'<th>Wins</th><th>Pods</th><th>DNF</th>':''}<th>Gap</th><th>Points</th></tr></thead><tbody>${
      list.map((d,i)=>`<tr class="click${i===0?' lead':''}" data-name="${esc(d.name)}"><td class="${i<3?'pos':''}">${String(i+1).padStart(2,'0')}</td><td><b>${esc(d.name)}</b>${d.code&&d.code!=='—'?`<small>${esc(d.code)}</small>`:''}</td><td class="muted">${esc(d.team)}</td><td><div class="form">${(d.form||[]).map(formDot).join('')}</div></td>${showStats?`<td>${d.wins||0}</td><td>${d.pods||0}</td><td>${d.dnf||0}</td>`:''}<td class="muted">${i===0?'—':'-'+(top-d.pts)}</td><td class="points">${d.pts}</td></tr>`).join('')
    }</tbody></table>`;
    $('stBoard').querySelectorAll('tr.click').forEach(tr=>tr.onclick=()=>openDriver(st.series,tr.dataset.name));
  } else {
    const list=data.constructors.slice().sort((a,b)=>b.pts-a.pts), top=list[0]?list[0].pts:0;
    $('stBoard').innerHTML=`<table><thead><tr><th>#</th><th>Team</th><th>Gap</th><th>Points</th></tr></thead><tbody>${
      list.map((c,i)=>`<tr class="${i===0?'lead':''}"><td class="${i<3?'pos':''}">${String(i+1).padStart(2,'0')}</td><td><span class="dot" style="background:${esc(c.color)}"></span><b>${esc(c.name)}</b></td><td class="muted">${i===0?'—':'-'+(top-c.pts)}</td><td class="points">${c.pts}</td></tr>`).join('')
    }</tbody></table>`;
  }
  const pt=D.points[st.series], b1=D.bonusFl[st.series], b2=D.bonusPole[st.series];
  $('ptsInfo').innerHTML=`<b>${esc(FULL[st.series])} points</b>${pt.map((p,i)=>`P${i+1}: ${p}`).join(' · ')}${(b1||b2)?`<br><b>Bonuses</b>${b1?`Fastest lap +${b1}`:''}${b1&&b2?' · ':''}${b2?`Pole +${b2}`:''}`:''}`;
}

/* ───────── calendar ───────── */
function renderCalendar(){
  if(!$('calGrid')) return;
  const nx=nextRace(), done=real.filter(r=>r.status==='completed').length;
  $('calSub').textContent=`${done} of ${real.length} rounds completed`;
  $('calGrid').innerHTML=D.races.map(r=>{
    if(r.status==='break') return `<div class="round break"><b>MID-SEASON</b><h3>${esc(r.name)}</h3></div>`;
    const isNext=nx&&nx.rnd===r.rnd, isDone=r.status==='completed'&&!isNext;
    const has=SERIES.some(s=>D.results[rkey(r,s)]);
    const label=isNext?(isLive(r)?'Live':'Next Race'):isDone?'Completed':'Upcoming';
    return `<div class="round ${isNext?'next':isDone?'done':''} ${has?'link':''}" ${has?`data-rnd="${esc(r.rnd)}"`:''}>
    <span class="flag">${esc(r.flag)}</span><b>ROUND ${esc(r.rnd)}</b><h3>${esc(r.name)}</h3><span class="circ">${esc(r.circuit)}</span>
    <span>${esc(dates(r))}</span><br><span class="st">${label}</span>
    <div class="chips">${(r.series||[]).map(s=>s.toUpperCase()).join(' · ')}${has?' · results ›':''}</div></div>`;
  }).join('');
  $('calGrid').onclick=e=>{
    const c=e.target.closest('.round[data-rnd]'); if(!c) return;
    const r=real.find(x=>x.rnd===c.dataset.rnd); if(!r) return;
    const s=SERIES.find(x=>D.results[rkey(r,x)]);
    rs.series=s; rs.rnd=r.rnd; renderResults(); go('results');
  };
}

/* ───────── results ───────── */
const rs={series:SERIES.includes(QS.get('s'))?QS.get('s'):'f1',rnd:QS.get('r')};
function roundsWithResults(s){ return real.filter(r=>D.results[rkey(r,s)]); }
function renderResults(){
  if(!$('resBoard')) return;
  tabs($('resSeries'),SERIES.map(s=>[s,FULL[s]]),rs.series,k=>{rs.series=k;rs.rnd=null;renderResults();});
  const rounds=roundsWithResults(rs.series);
  if(!rounds.length){ $('resBoard').innerHTML='<div class="empty">No results published yet.</div>'; $('resRound').innerHTML=''; $('resMeta').innerHTML=''; return; }
  if(!rounds.find(r=>r.rnd===rs.rnd)) rs.rnd=rounds[rounds.length-1].rnd;
  const cur=rounds.find(r=>r.rnd===rs.rnd), dd=$('resRound');
  dd.innerHTML=`<button type="button" class="dd-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="Select round"><span class="fl">${esc(cur.flag||'')}</span><span class="tx"><small>Round ${esc(cur.rnd)}</small><b>${esc(cur.name)}</b></span><svg class="car" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="dd-panel" role="listbox">${rounds.slice().reverse().map(r=>`<button type="button" role="option" class="dd-opt${r.rnd===rs.rnd?' on':''}" data-rnd="${esc(r.rnd)}" aria-selected="${r.rnd===rs.rnd}"><span class="fl">${esc(r.flag||'')}</span><span class="tx"><small>Round ${esc(r.rnd)}</small><b>${esc(r.name)}</b></span><svg class="ck" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12l5 5 9-10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`).join('')}</div>`;
  const ddBtn=dd.querySelector('.dd-btn');
  const ddSet=o=>{dd.classList.toggle('open',o);ddBtn.setAttribute('aria-expanded',o);};
  dd.onclick=e=>{
    const opt=e.target.closest('.dd-opt');
    if(opt){rs.rnd=opt.dataset.rnd;renderResults();return;}
    if(e.target.closest('.dd-btn')){
      const o=!dd.classList.contains('open'); ddSet(o);
      if(o){const on=dd.querySelector('.dd-opt.on'); if(on) on.scrollIntoView({block:'nearest'});}
    }
  };
  dd.onkeydown=e=>{
    if(e.key==='Escape'){ddSet(false);ddBtn.focus();return;}
    if(e.key!=='ArrowDown'&&e.key!=='ArrowUp') return;
    e.preventDefault();
    const opts=[...dd.querySelectorAll('.dd-opt')], k=opts.indexOf(document.activeElement);
    if(!dd.classList.contains('open')){ddSet(true);(dd.querySelector('.dd-opt.on')||opts[0]).focus();return;}
    const n=e.key==='ArrowDown'?Math.min(k+1,opts.length-1):Math.max(k-1,0);
    opts[n<0?0:n].focus();
  };
  if(!window._ddInit){
    window._ddInit=1;
    document.addEventListener('click',e=>{const o=document.querySelector('.dd.open'); if(o&&!o.contains(e.target)){o.classList.remove('open');const b=o.querySelector('.dd-btn'); if(b) b.setAttribute('aria-expanded','false');}});
  }
  const race=real.find(r=>r.rnd===rs.rnd), rows=D.results[rkey(race,rs.series)];
  if($('resSub')) $('resSub').textContent=`Round ${race.rnd} · ${race.name}`;
  const sd=D.sessions[rs.series];
  $('resMeta').innerHTML=`<span>${esc(race.flag)} <b>${esc(race.circuit)}</b></span><span>${esc(dates(race))}</span><span>${esc(FULL[rs.series])} · ${esc(sd.day)} ${esc(sd.time)}</span>${D.halfRaces&&D.halfRaces[rkey(race,rs.series)]?'<span><b>50% rule</b> · half points awarded</span>':''}`;
  const hasGap=rows.some(r=>r.gap);
  $('resBoard').innerHTML=`<table><thead><tr><th>Pos</th><th>Driver</th><th>Team</th>${hasGap?'<th>Gap</th>':''}<th>Notes</th><th>Pts</th></tr></thead><tbody>${
    rows.map(r=>`<tr class="click" data-name="${esc(r.name)}"><td class="${r.pos<=3?'pos':''}">P${r.pos}</td><td><b>${esc(r.name)}</b>${r.pole?'<span class="tag pole">Pole</span>':''}${r.fl?'<span class="tag fl">FL</span>':''}${r.half?'<span class="tag half">50% rule</span>':''}</td><td class="muted">${esc(r.team)}</td>${hasGap?`<td class="muted">${esc(r.gap||'')}</td>`:''}<td class="note">${esc(r.note||'')}</td><td class="points">${r.pts}</td></tr>`).join('')
  }</tbody></table>`;
  $('resBoard').querySelectorAll('tr.click').forEach(tr=>tr.onclick=()=>openDriver(rs.series,tr.dataset.name));
}

/* ───────── teams ───────── */
const tm={series:SERIES.includes(QS.get('s'))?QS.get('s'):'f1'};
function renderTeams(){
  if(!$('tmGrid')) return;
  tabs($('tmSeries'),SERIES.map(s=>[s,FULL[s]]),tm.series,k=>{tm.series=k;renderTeams();});
  $('tmGrid').innerHTML=D.info[tm.series].map(t=>{
    const con=conFor(tm.series,t.name);
    const staff=String(t.engine||'').split(' · ').map(x=>x.trim()).filter(Boolean);
    const drivers=t.drivers.filter(d=>d.name&&d.name!=='—');
    return `<div class="card team-card" data-team="${esc(t.name)}" style="--tc:${esc(t.color||'#e8186d')}">
    <div class="tc-head"><h3>${esc(t.name)}</h3></div>
    ${con?`<span class="badge">P${con.pos} · ${con.pts} pts</span>`:''}
    <div class="tc-staff">${staff.map(esc).join('<br>')}</div>
    <ul>${drivers.map(d=>`<li data-name="${esc(d.name)}"><b><em>${d.num&&d.num!=='—'?'#'+esc(d.num):'—'}</em>${esc(d.name)}</b><span>${esc(d.code||'')}</span></li>`).join('')||'<li style="cursor:default"><b class="muted">No drivers listed</b></li>'}</ul><span class="tc-hint">View team results →</span></div>`;
  }).join('');
  $('tmGrid').querySelectorAll('li[data-name]').forEach(li=>li.onclick=e=>{e.stopPropagation();openDriver(tm.series,li.dataset.name);});
  $('tmGrid').querySelectorAll('.team-card[data-team]').forEach(c=>c.onclick=()=>openTeam(tm.series,c.dataset.team));
}


/* ───────── driver profile (race-by-race from the results tables) ───────── */
function openDriver(s,name){
  const c=canon(s,name);
  const se=D.standings[s].drivers.find(d=>canon(s,d.name)===c), li=lineupFor(s,name);
  const rows=[];
  real.forEach(r=>{
    const list=D.results[rkey(r,s)]; if(!list) return;
    const hit=list.find(x=>canon(s,x.name)===c);
    if(hit) rows.push({r,hit});
  });
  const wins=rows.filter(x=>x.hit.pos===1).length, pods=rows.filter(x=>x.hit.pos<=3).length;
  const poles=rows.filter(x=>x.hit.pole).length, fls=rows.filter(x=>x.hit.fl).length;
  const team=se?se.team:(li?li.teamName:'');
  const pos=se?[...D.standings[s].drivers].filter(d=>!d.hidden).sort((a,b)=>b.pts-a.pts).findIndex(d=>d===se)+1:null;
  $('modalBox').innerHTML=`<button class="modal-x" aria-label="Close" onclick="closeModal()">×</button>
  <div class="kicker">${esc(FULL[s])}${li&&li.num&&li.num!=='—'?' · #'+esc(li.num):''}${li&&li.code&&li.code!=='—'?' · '+esc(li.code):''}</div>
  <h2>${esc(se?se.name:name)}</h2><div class="m-sub">${esc(team)}</div>
  <div class="m-stats"><div><strong>${pos?'P'+pos:'—'}</strong><span>Standing</span></div><div><strong>${se?se.pts:'—'}</strong><span>Points</span></div><div><strong>${wins}</strong><span>Wins</span></div><div><strong>${pods}</strong><span>Podiums</span></div><div><strong>${poles} / ${fls}</strong><span>Poles / FL</span></div></div>
  ${rows.length?`<div class="scroll"><table><thead><tr><th>Rd</th><th>Race</th><th>Finish</th><th>Notes</th><th>Pts</th></tr></thead><tbody>${rows.map(({r,hit})=>`<tr><td class="pos">${esc(r.rnd)}</td><td>${esc(r.flag)} ${esc(r.name)}</td><td>P${hit.pos}${hit.pole?'<span class="tag pole">Pole</span>':''}${hit.fl?'<span class="tag fl">FL</span>':''}</td><td class="note">${esc(hit.note||'')}</td><td class="points">${hit.pts}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No race results found for this driver yet.</div>'}`;
  const m=$('modal'); m.classList.add('open'); m.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeModal(){const m=$('modal'); m.classList.remove('open'); m.setAttribute('aria-hidden','true'); document.body.style.overflow='';}
if($('modal')) $('modal').addEventListener('click',e=>{if(e.target.id==='modal') closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeModal();});




/* ───────── team profile (all of a team's results, round by round) ───────── */
const TEAM_ALIAS={f2:{vanguardsabremotorsport:'vanguardsabreracing',cassienmotorsport:'cassien',acurateampenske:'acura'},f3:{lmp:'lmperformance'}};
function teamKey(s,n){
  let k=String(n||'').toLowerCase().replace(/\s*\(.*?\)\s*/g,' ').replace(/formula\s*\d/g,'formula').replace(/\b(team|f1|f2|f3)\b/g,' ')
    .replace(/motorsports/g,'motorsport').replace(/sports/g,'sport').replace(/[^a-z0-9]/g,'');
  return (TEAM_ALIAS[s]&&TEAM_ALIAS[s][k])||k;
}
function teamKeys(s,teamName){
  const keys=new Set([teamKey(s,teamName)]), con=conFor(s,teamName);
  if(con){ keys.add(teamKey(s,con.name)); const m=String(con.name).match(/\(([^)]+)\)/); if(m) keys.add(teamKey(s,m[1])); }
  return keys;
}
function openTeam(s,teamName){
  const keys=teamKeys(s,teamName), con=conFor(s,teamName);
  const info=(D.info[s]||[]).find(t=>teamKey(s,t.name)===teamKey(s,teamName)||keys.has(teamKey(s,t.name)));
  const rounds=[]; let total=0,wins=0,pods=0,poles=0,fls=0;
  real.forEach(r=>{
    const list=D.results[rkey(r,s)]; if(!list) return;
    const hits=list.filter(x=>keys.has(teamKey(s,x.team))); if(!hits.length) return;
    const pts=hits.reduce((n,x)=>n+(+x.pts||0),0); total+=pts;
    hits.forEach(x=>{ if(+x.pos===1) wins++; if(+x.pos<=3) pods++; if(x.pole) poles++; if(x.fl) fls++; });
    rounds.push({r,hits,pts});
  });
  const color=(con&&con.color)||(info&&info.color)||'#e8186d';
  const staff=info?String(info.engine||'').split(' · ').map(x=>x.trim()).filter(Boolean):[];
  const drv=info?info.drivers.filter(d=>d.name&&d.name!=='—').map(d=>d.name):[];
  const pos=con?con.pos:null;
  const body=rounds.map(({r,hits,pts})=>hits.map((x,i)=>`<tr><td class="pos">${i?'':esc(r.rnd)}</td><td>${i?'':esc(r.flag)+' '+esc(r.name)}</td><td>${esc(x.name)}</td><td>P${x.pos}${x.pole?'<span class="tag pole">Pole</span>':''}${x.fl?'<span class="tag fl">FL</span>':''}</td><td class="note">${esc(x.note||'')}</td><td class="points">${x.pts}</td></tr>`).join('')
    +(hits.length>1?`<tr class="rtot"><td></td><td colspan="4">Round ${esc(r.rnd)} team total</td><td class="points">${pts}</td></tr>`:'')).join('');
  $('modalBox').innerHTML=`<button class="modal-x" aria-label="Close" onclick="closeModal()">×</button>
  <div class="kicker">${esc(FULL[s])} · Team</div>
  <h2 style="border-left:4px solid ${esc(color)};padding-left:12px">${esc(con?con.name.replace(/\s*\(.*?\)\s*$/,''):teamName)}</h2>
  <div class="m-sub">${esc(staff.join(' · '))}${drv.length?(staff.length?' — ':'')+esc(drv.join(', ')):''}</div>
  <div class="m-stats"><div><strong>${pos?'P'+pos:'—'}</strong><span>Standing</span></div><div><strong>${con?con.pts:total}</strong><span>Points</span></div><div><strong>${wins}</strong><span>Wins</span></div><div><strong>${pods}</strong><span>Podiums</span></div><div><strong>${poles} / ${fls}</strong><span>Poles / FL</span></div></div>
  ${rounds.length?`<div class="scroll"><table><thead><tr><th>Rd</th><th>Race</th><th>Driver</th><th>Finish</th><th>Notes</th><th>Pts</th></tr></thead><tbody>${body}</tbody></table></div>`:'<div class="empty">No race results for this team yet.</div>'}`;
  const m=$('modal'); m.classList.add('open'); m.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}

/* ───────── champions ───────── */
const CHAMPS=[
  {series:'f1',type:'driver',name:'Nick',kind:"World Drivers' Champion"},
  {series:'f3',type:'team',name:'LMP',kind:"World Constructors' Champion"}
];
function renderChampions(){
  const box=$('champBoard'); if(!box) return;
  box.innerHTML=CHAMPS.map(ch=>{
    const s=ch.series;
    if(ch.type==='driver'){
      const list=D.standings[s].drivers.filter(d=>!d.hidden&&d.name&&d.name!=='—').slice().sort((a,b)=>b.pts-a.pts);
      const se=list.find(d=>canon(s,d.name)===canon(s,ch.name)); if(!se) return '';
      const c=conFor(s,se.team), col=(c&&c.color)||(lineupFor(s,ch.name)||{}).color||'#e8186d';
      let wins=0,pods=0,poles=0,fls=0;
      real.forEach(r=>{const hit=(D.results[rkey(r,s)]||[]).find(x=>canon(s,x.name)===canon(s,ch.name)); if(!hit) return;
        if(+hit.pos===1) wins++; if(+hit.pos<=3) pods++; if(hit.pole) poles++; if(hit.fl) fls++;});
      const lead=list[1]?se.pts-list[1].pts:0;
      return `<div class="champ click" style="--c:${esc(col)}" data-name="${esc(se.name)}" data-s="${s}">
        <div class="champ-trophy">🏆</div><div class="champ-kind">${esc(FULL[s])} · ${esc(ch.kind)}</div>
        <div class="champ-name">${esc(se.name)}</div><div class="champ-team">${esc(se.team||'')}</div>
        <div class="champ-stats"><div><strong>${se.pts}</strong><span>Points</span></div><div><strong>+${lead}</strong><span>Margin</span></div><div><strong>${wins}</strong><span>Wins</span></div><div><strong>${pods}</strong><span>Podiums</span></div><div><strong>${poles} / ${fls}</strong><span>Poles / FL</span></div></div></div>`;
    }
    const cons=(D.standings[s].constructors||[]).slice().sort((a,b)=>b.pts-a.pts);
    const se=cons.find(x=>normTeam(x.name)===normTeam(ch.name)); if(!se) return '';
    const lead=cons[1]?se.pts-cons[1].pts:0;
    let wins=0,pods=0;
    real.forEach(r=>(D.results[rkey(r,s)]||[]).forEach(x=>{ if(normTeam(x.team)!==normTeam(ch.name)) return; if(+x.pos===1) wins++; if(+x.pos<=3) pods++; }));
    const drv=((D.info[s]||[]).find(t=>normTeam(t.name)===normTeam(ch.name))||{drivers:[]}).drivers.filter(d=>d.name&&d.name!=='—').map(d=>d.name);
    return `<div class="champ click team" style="--c:${esc(se.color||'#a78bfa')}" data-team="${esc(se.name)}" data-s="${s}">
      <div class="champ-trophy">🏆</div><div class="champ-kind">${esc(FULL[s])} · ${esc(ch.kind)}</div>
      <div class="champ-name">${esc(se.name)}</div><div class="champ-team">${esc(drv.join(' · '))}</div>
      <div class="champ-stats"><div><strong>${se.pts}</strong><span>Points</span></div><div><strong>+${lead}</strong><span>Margin</span></div><div><strong>${wins}</strong><span>Wins</span></div><div><strong>${pods}</strong><span>Podiums</span></div></div></div>`;
  }).join('');
  box.onclick=e=>{const tm_=e.target.closest('[data-team]'); if(tm_) return openTeam(tm_.dataset.s,tm_.dataset.team); const el=e.target.closest('[data-name]'); if(el) openDriver(el.dataset.s,el.dataset.name);};
}

/* ───────── title fight ───────── */
const tf={series:'f1'};
function renderTitleFight(){
  if(!$('tfBoard')) return;
  tabs($('tfSeries'),SERIES.map(s=>[s,FULL[s]]),tf.series,k=>{tf.series=k;renderTitleFight();});
  const s=tf.series, data=D.standings[s];
  const list=data.drivers.filter(d=>!d.hidden&&d.name&&d.name!=='—').slice().sort((a,b)=>b.pts-a.pts);
  if(!list.length){ $('tfBoard').innerHTML='<div class="empty">No standings published yet.</div>'; return; }
  const top=list[0].pts, colorOf=d=>{const c=conFor(s,d.team); return (c&&c.color)||(lineupFor(s,d.name)||{}).color||'#e8186d';};
  const card=(d,i)=>{
    const c=colorOf(d), p=i===0;
    const gap=p?(list[1]?`+${d.pts-list[1].pts} on P2`:'Leader'):`-${top-d.pts} to leader`;
    const f=(d.form||[]).filter(v=>v!==''&&v!=null).slice(-5);
    return `<div class="tf-card${p?' p1':''}" style="--c:${esc(c)}" data-name="${esc(d.name)}">
      ${p?'<div class="tf-crown">Championship Leader</div>':''}<div class="tf-rank">P${i+1}</div>
      <div class="tf-name">${esc(d.name)}</div><div class="tf-team">${esc(d.team||'')}</div>
      <div class="tf-pts"><b>${d.pts}</b><span>pts</span></div><div class="tf-gap">${gap}</div>
      ${f.length?`<div class="form">${f.map(formDot).join('')}</div>`:''}</div>`;
  };
  const order=[1,0,2].filter(i=>list[i]);
  const rest=list.slice(3,8);
  const rounds=real.filter(r=>(r.series||[]).includes(s)), done=rounds.filter(r=>r.status==='completed').length;
  $('tfBoard').innerHTML=`<div class="tf-podium">${order.map(i=>card(list[i],i)).join('')}</div>
    ${rest.length?`<div class="tf-pack">${rest.map((d,k)=>`<div class="tf-row" style="--c:${esc(colorOf(d))}" data-name="${esc(d.name)}"><span class="tf-p">P${k+4}</span><span class="tf-n">${esc(d.name)}</span><div class="tf-track"><i data-w="${top?Math.max(3,Math.round(d.pts/top*100)):0}"></i></div><b>${d.pts}</b></div>`).join('')}</div>`:''}
    <div class="tf-prog"><span>${done} of ${rounds.length} rounds done</span><div class="bar"><i style="width:${rounds.length?Math.round(done/rounds.length*100):0}%"></i></div></div>`;
  requestAnimationFrame(()=>requestAnimationFrame(()=>$('tfBoard').querySelectorAll('.tf-track i').forEach(i=>i.style.width=i.dataset.w+'%')));
  $('tfBoard').onclick=e=>{const el=e.target.closest('[data-name]'); if(el) openDriver(s,el.dataset.name);};
}

/* ───────── head to head ───────── */
const hh={series:'f1',a:0,b:1};
function ddBuild(el,items,cur,onPick){
  const c=items.find(i=>i.v===cur)||items[0];
  const fl=i=>`<span class="fl"><i class="dot" style="--c:${esc(i.c)}"></i></span>`;
  el.innerHTML=`<button type="button" class="dd-btn" aria-haspopup="listbox" aria-expanded="false"><span class="fl"><i class="dot" style="--c:${esc(c.c)}"></i></span><span class="tx"><small>${esc(c.sm)}</small><b>${esc(c.name)}</b></span><svg class="car" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="dd-panel" role="listbox">${items.map(i=>`<button type="button" role="option" class="dd-opt${i.v===c.v?' on':''}" data-v="${i.v}" aria-selected="${i.v===c.v}">${fl(i)}<span class="tx"><small>${esc(i.sm)}</small><b>${esc(i.name)}</b></span><svg class="ck" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12l5 5 9-10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`).join('')}</div>`;
  const btn=el.querySelector('.dd-btn'), set=o=>{el.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);};
  el.onclick=e=>{
    const opt=e.target.closest('.dd-opt');
    if(opt){onPick(+opt.dataset.v);return;}
    if(e.target.closest('.dd-btn')){
      document.querySelectorAll('.dd.open').forEach(o=>{if(o!==el)o.classList.remove('open');});
      const o=!el.classList.contains('open'); set(o);
      if(o){const on=el.querySelector('.dd-opt.on'); if(on) on.scrollIntoView({block:'nearest'});}
    }
  };
  el.onkeydown=e=>{
    if(e.key==='Escape'){set(false);btn.focus();return;}
    if(e.key!=='ArrowDown'&&e.key!=='ArrowUp') return;
    e.preventDefault();
    const opts=[...el.querySelectorAll('.dd-opt')], k=opts.indexOf(document.activeElement);
    if(!el.classList.contains('open')){set(true);(el.querySelector('.dd-opt.on')||opts[0]).focus();return;}
    const n=e.key==='ArrowDown'?Math.min(k+1,opts.length-1):Math.max(k-1,0);
    opts[n<0?0:n].focus();
  };
  if(!window._ddInit){
    window._ddInit=1;
    document.addEventListener('click',e=>{const o=document.querySelector('.dd.open'); if(o&&!o.contains(e.target)){o.classList.remove('open');const b=o.querySelector('.dd-btn'); if(b) b.setAttribute('aria-expanded','false');}});
  }
}
function driverStats(s,d){
  const c=canon(s,d.name), rows=[];
  real.forEach(r=>{const list=D.results[rkey(r,s)]; if(!list) return; const hit=list.find(x=>canon(s,x.name)===c); if(hit) rows.push(hit);});
  const dnf=h=>/DNF|DSq|DNS/i.test(h.note||''), fin=rows.filter(h=>!dnf(h)&&typeof h.pos==='number');
  const sorted=[...D.standings[s].drivers].filter(x=>!x.hidden&&x.name&&x.name!=='—').sort((a,b)=>b.pts-a.pts);
  return {
    pos:sorted.indexOf(d)+1, pts:d.pts, races:rows.length,
    ppr:rows.length?d.pts/rows.length:null,
    wins:rows.filter(h=>h.pos===1&&!dnf(h)).length, pods:fin.filter(h=>h.pos<=3).length,
    poles:rows.filter(h=>h.pole).length, fls:rows.filter(h=>h.fl).length, dnfs:rows.filter(dnf).length,
    avg:fin.length?fin.reduce((n,h)=>n+h.pos,0)/fin.length:null,
    best:fin.length?Math.min(...fin.map(h=>h.pos)):null
  };
}
function renderHeadToHead(){
  if(!$('hhBoard')) return;
  tabs($('hhSeries'),SERIES.map(s=>[s,FULL[s]]),hh.series,k=>{hh.series=k;hh.a=0;hh.b=1;renderHeadToHead();});
  const s=hh.series;
  const list=D.standings[s].drivers.filter(d=>!d.hidden&&d.name&&d.name!=='—').slice().sort((a,b)=>b.pts-a.pts);
  if(list.length<2){ $('hhBoard').innerHTML='<div class="empty">Not enough drivers yet.</div>'; return; }
  const colorOf=d=>{const c=conFor(s,d.team); return (c&&c.color)||(lineupFor(s,d.name)||{}).color||'#e8186d';};
  if(hh.a>=list.length) hh.a=0; if(hh.b>=list.length||hh.b===hh.a) hh.b=hh.a===0?1:0;
  const A=list[hh.a], B=list[hh.b], ca=colorOf(A);
  let cb=colorOf(B); if(cb.toLowerCase()===ca.toLowerCase()) cb='#e8186d';
  const sa=driverStats(s,A), sb=driverStats(s,B);
  const items=list.map((d,i)=>({v:i,name:d.name,sm:`P${i+1} · ${d.team||''}`,c:colorOf(d)}));
  const M=[['Standing','pos',1,v=>'P'+v],['Points','pts',0,v=>v],['Pts / Race','ppr',0,v=>v==null?'—':v.toFixed(1)],['Wins','wins',0,v=>v],['Podiums','pods',0,v=>v],['Poles','poles',0,v=>v],['Fastest Laps','fls',0,v=>v],['Avg Finish','avg',1,v=>v==null?'—':v.toFixed(1)],['Best Finish','best',1,v=>v==null?'—':'P'+v],['DNFs','dnfs',1,v=>v]];
  let wa=0,wb=0;
  const rows=M.map(([lab,k,low,fmt])=>{
    const x=sa[k], y=sb[k], ok=x!=null&&y!=null;
    let w=0; if(ok&&x!==y) w=(low?x<y:x>y)?1:2;
    if(w===1) wa++; if(w===2) wb++;
    let pa=50,pb=50;
    if(ok&&(x+y)>0){ pa=x/(x+y)*100; pb=100-pa; if(low){const t=pa;pa=pb;pb=t;} }
    return `<div class="hh-row"><div class="hh-cell a${w===1?' win':''}"><strong>${fmt(x)}</strong><div class="hh-bar"><i data-w="${ok?pa:0}"></i></div></div><div class="hh-lab">${lab}</div><div class="hh-cell b${w===2?' win':''}"><strong>${fmt(y)}</strong><div class="hh-bar"><i data-w="${ok?pb:0}"></i></div></div></div>`;
  }).join('');
  const verdict=wa===wb?'Dead heat':(wa>wb?A.name:B.name)+' takes it';
  $('hhBoard').innerHTML=`<div class="hh-pick"><div class="dd" id="hhA"></div><div class="hh-vs">VS</div><div class="dd r" id="hhB"></div></div>
    <div class="hh-card" style="--a:${esc(ca)};--b:${esc(cb)}">
      <div class="hh-score"><div class="hh-side a"><b>${esc(A.name)}</b><span>${esc(A.team||'')}</span></div><div class="hh-mid"><strong>${wa}–${wb}</strong><span>${esc(verdict)}</span></div><div class="hh-side b"><b>${esc(B.name)}</b><span>${esc(B.team||'')}</span></div></div>
      <div class="hh-rows">${rows}</div></div>`;
  ddBuild($('hhA'),items,hh.a,v=>{hh.a=v;if(hh.b===v)hh.b=(v+1)%list.length;renderHeadToHead();});
  ddBuild($('hhB'),items,hh.b,v=>{hh.b=v;if(hh.a===v)hh.a=(v+1)%list.length;renderHeadToHead();});
  requestAnimationFrame(()=>requestAnimationFrame(()=>$('hhBoard').querySelectorAll('.hh-bar i').forEach(i=>i.style.width=i.dataset.w+'%')));
}

/* ───────── points progression ───────── */
/* ───────── standings sub-sections ───────── */
const stp={p:'table'};
function stPane(p){
  stp.p=p;
  document.querySelectorAll('#stSub button').forEach(b=>b.classList.toggle('on',b.dataset.p===p));
  document.querySelectorAll('.st-pane').forEach(e=>e.classList.toggle('on',e.dataset.p===p));
  if(p!=='replay') rpStop();
  if(p==='replay') rpRender();
}
if($('stSub')) $('stSub').onclick=e=>{const b=e.target.closest('button[data-p]'); if(b) stPane(b.dataset.p);};

/* ───────── season replay (bar chart race) ───────── */
const rp={series:'f1',t:0,playing:false,speed:1,raf:0,last:0,d:null,rows:[]};
const RP_N=10, RP_H=44, RP_SECS=1.25;
function rpStop(){ rp.playing=false; cancelAnimationFrame(rp.raf); const b=$('rpPlay'); if(b) b.innerHTML=rpIcon(false); }
function rpIcon(playing,done){
  return playing?'<svg viewBox="0 0 24 24" width="20" height="20"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="#fff"/></svg>'
  :done?'<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 5a7 7 0 1 1-6.7 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><path d="M12 1.5L7 5l5 3.5z" fill="#fff"/></svg>'
  :'<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5l11 7-11 7z" fill="#fff"/></svg>';
}
function rpData(s){
  const rounds=roundsWithResults(s); if(!rounds.length) return null;
  const used=[], list=D.standings[s].drivers.filter(d=>!d.hidden&&d.name&&d.name!=='—');
  const drivers=list.map(d=>{
    const c=conFor(s,d.team), col=(c&&c.color)||(lineupFor(s,d.name)||{}).color||'#e8186d', cn=canon(s,d.name); let run=0;
    const hits=rounds.map(r=>(D.results[rkey(r,s)]||[]).find(x=>canon(s,x.name)===cn));
    /* standings are the truth: if the raw rows overshoot by exactly an "Under Investigation" result, that result was stripped */
    const over=hits.reduce((a,x)=>a+(x&&x.pts?+x.pts:0),0)-(+d.pts||0);
    const voided=over>0?hits.findIndex(x=>x&&+x.pts===over&&/investigat/i.test(x.note||'')):-1;
    const cum=hits.map((hit,i)=>{ run+=hit&&hit.pts&&i!==voided?+hit.pts:0; return run;});
    return {name:d.name,col,cum};
  }).filter(d=>d.cum[d.cum.length-1]>0);
  if(!drivers.length) return null;
  return {rounds,drivers,max:Math.max(...drivers.map(d=>d.cum[d.cum.length-1]))};
}
function rpRender(){
  const board=$('rpBoard'); if(!board) return;
  rpStop();
  tabs($('rpSeries'),SERIES.map(s=>[s,FULL[s]]),rp.series,k=>{rp.series=k;rpRender();});
  rp.d=rpData(rp.series);
  if(!rp.d){ board.innerHTML='<div class="empty">No results published yet.</div>'; return; }
  const n=rp.d.rounds.length, rows=Math.min(RP_N,rp.d.drivers.length);
  board.innerHTML=`<div class="rp-card"><div class="rp-top"><div class="rp-round"><span class="fl" id="rpFlag"></span><div><small id="rpRnd"></small><b id="rpName"></b></div></div>
    <div class="rp-ctl"><button type="button" class="rp-play" id="rpPlay" aria-label="Play or pause"></button>${[1,2,4].map(x=>`<button type="button" class="rp-spd${x===rp.speed?' on':''}" data-x="${x}">${x}×</button>`).join('')}</div></div>
    <div class="rp-stage" id="rpStage" style="height:${rows*RP_H}px">${rp.d.drivers.map((d,i)=>`<div class="rp-row" data-i="${i}" style="--c:${esc(d.col)};height:${RP_H}px"><span class="rp-rk"></span><span class="rp-nm">${esc(d.name)}</span><div class="rp-tr"><div class="rp-fill"></div><b class="rp-v">0</b></div></div>`).join('')}</div>
    <div class="rp-scrub"><input type="range" id="rpRange" min="0" max="${Math.max(1,(n-1)*100)}" value="0" aria-label="Season progress"><span id="rpTag"></span></div></div>`;
  rp.rows=[...board.querySelectorAll('.rp-row')];
  rp.t=0; rpDraw(0,true);
  $('rpPlay').innerHTML=rpIcon(false);
  $('rpPlay').onclick=()=>{ if(rp.playing){rpStop();return;} if(rp.t>=n-1-1e-6) rp.t=0; rpPlay(); };
  board.querySelectorAll('.rp-spd').forEach(b=>b.onclick=()=>{rp.speed=+b.dataset.x; board.querySelectorAll('.rp-spd').forEach(x=>x.classList.toggle('on',x===b));});
  $('rpRange').oninput=e=>{rpStop(); rp.t=Math.min(n-1,+e.target.value/100); rpDraw(rp.t);};
  const reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(n>1&&!reduce) setTimeout(()=>{ if(rp.d&&$('view-standings').classList.contains('on')&&stp.p==='replay'&&!rp.playing&&rp.t===0) rpPlay(); },450);
  else { rp.t=n-1; rpDraw(rp.t,true); }
}
function rpPlay(){
  rp.playing=true; $('rpPlay').innerHTML=rpIcon(true); rp.last=performance.now();
  const n=rp.d.rounds.length;
  const tick=now=>{
    if(!rp.playing) return;
    const dt=Math.min(.1,(now-rp.last)/1000); rp.last=now;
    rp.t=Math.min(n-1,rp.t+dt*rp.speed/RP_SECS);
    rpDraw(rp.t);
    if(rp.t>=n-1){ rp.playing=false; $('rpPlay').innerHTML=rpIcon(false,true); return; }
    rp.raf=requestAnimationFrame(tick);
  };
  rp.raf=requestAnimationFrame(tick);
}
function rpDraw(t,instant){
  const d=rp.d; if(!d) return;
  const n=d.rounds.length, i=Math.min(n-1,Math.floor(t)), j=Math.min(n-1,i+1), f=t-i, e=f*f*(3-2*f);
  const vals=d.drivers.map(x=>x.cum[i]+(x.cum[j]-x.cum[i])*e);
  const order=vals.map((v,k)=>k).sort((a,b)=>vals[b]-vals[a]||b-a), rank=[]; order.forEach((k,r)=>rank[k]=r);
  const r=d.rounds[Math.min(n-1,Math.round(t))];
  $('rpFlag').textContent=r.flag||''; $('rpRnd').textContent='Round '+r.rnd+' of '+d.rounds[n-1].rnd; $('rpName').textContent=r.name;
  $('rpTag').textContent='R'+(+r.rnd)+' / R'+(+d.rounds[n-1].rnd);
  $('rpRange').value=Math.round(t*100);
  rp.rows.forEach((row,k)=>{
    const rk=rank[k], show=rk<RP_N;
    if(instant) row.style.transition='none';
    row.style.transform=`translateY(${Math.min(rk,RP_N)*RP_H}px)`;
    row.style.opacity=show?1:0; row.style.pointerEvents='none';
    row.classList.toggle('lead',rk===0);
    row.children[0].textContent=show?rk+1:'';
    row.querySelector('.rp-fill').style.width=(vals[k]/d.max*88)+'%';
    row.querySelector('.rp-v').textContent=Math.round(vals[k]);
    if(instant) requestAnimationFrame(()=>{row.style.transition='';});
  });
}
renderNext(); renderSeriesCards(); renderStandings(); renderCalendar(); renderResults(); renderTeams(); renderChampions(); renderTitleFight(); renderHeadToHead();
 

const VIEWS=['home', 'standings', 'calendar', 'results', 'news', 'teams', 'transfers', 'about', 'join'];
function go(v){
  if(!VIEWS.includes(v)) v='home';
  document.querySelectorAll('.view').forEach(e=>e.classList.toggle('on',e.id==='view-'+v));
  document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.v===v));
  try{ if(location.hash!=='#'+v) history.replaceState(null,'','#'+v); }catch(err){}
  try{ window.scrollTo(0,0); }catch(err){}
  closeModal();
  if(v==='standings') stPane(stp.p); else rpStop();
  if(v==='news') loadNews();
}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]'); if(!a) return; const v=a.getAttribute('href').slice(1); if(VIEWS.includes(v)){e.preventDefault();go(v);}});
try{ window.addEventListener('hashchange',()=>go(location.hash.slice(1))); }catch(err){}
var _h=''; try{ _h=location.hash.slice(1); }catch(err){}
go(_h||'home');;
(function(){
const dnfRe=/DNF|DSq|DSQ|DNS/i;
/* ───────── records ───────── */
const rc={series:'f1'};
function recStats(s){
  const m={};
  real.forEach(r=>{(D.results[rkey(r,s)]||[]).forEach(x=>{
    const c=canon(s,x.name); const o=m[c]||(m[c]={name:x.name,wins:0,pods:0,poles:0,fls:0,races:0,pts:0});
    const bad=dnfRe.test(x.note||''); o.races++; o.pts+=+x.pts||0;
    if(!bad&&x.pos===1&&!/Retired/i.test(x.note||'')) o.wins++;
    if(!bad&&x.pos<=3) o.pods++;
    if(x.pole) o.poles++; if(x.fl) o.fls++;
  });});
  return Object.values(m);
}
function renderRecords(){
  const box=$('recBoard'); if(!box) return;
  tabs($('recSeries'),SERIES.map(s=>[s,FULL[s]]),rc.series,k=>{rc.series=k;renderRecords();});
  const s=rc.series, all=recStats(s);
  const cards=[['Most Wins','wins','🏁'],['Most Podiums','pods','🥇'],['Most Poles','poles','⚡'],['Most Fastest Laps','fls','⏱️']].map(([t,k,ic])=>{
    const l=all.filter(x=>x[k]>0).sort((a,b)=>b[k]-a[k]||b.pts-a.pts).slice(0,5);
    if(!l.length) return `<div class="rec"><h4>${ic} ${t}</h4><div class="note">No data yet</div></div>`;
    return `<div class="rec"><h4>${ic} ${t}</h4><div class="big">${l[0][k]}</div><div class="who" data-name="${esc(l[0].name)}">${esc(l[0].name)}</div>
    <ol>${l.slice(1).map(x=>`<li data-name="${esc(x.name)}"><b>${esc(x.name)}</b><span>${x[k]}</span></li>`).join('')}</ol></div>`;}).join('');
  box.innerHTML=`<div class="rec-grid">${cards}</div>`;
  box.onclick=e=>{const r=e.target.closest('[data-name]'); if(r) openDriver(s,r.dataset.name);};
}

(function(){
  const view=document.createElement('div'); view.className='view'; view.id='view-records';
  view.innerHTML='<div class="page-hero"><div class="section-head"><div><div class="title">Season <span class="yellow">Records</span></div><div class="line"></div></div><span class="sub">2026 season leaders</span></div></div><section><div class="tabs" id="recSeries"></div><div id="recBoard"></div></section>';
  document.getElementById('view-teams').after(view);
  VIEWS.splice(VIEWS.indexOf('teams')+1,0,'records');
  const a=document.createElement('a'); a.href='#records'; a.dataset.v='records'; a.textContent='Records';
  document.querySelector('header nav a[data-v="teams"]').after(a);
  renderRecords();
  if(location.hash==='#records') go('records');
})();
})();;
(function(){
  const $=id=>document.getElementById(id);
  const colorOf=(s,team,name)=>{const c=conFor(s,team);return (c&&c.color)||(lineupFor(s,name)||{}).color||'#e8186d';};
  const bad=/DNF|DSq|DSQ|DNS|Retired/i;
  const home=$('view-home'), anchor=$('titleFight');

  /* 2 ─ RACE PODIUM (lives on the Results page, follows the selected series + round) */
  function renderLP(){
    const box=$('lpBoard'), rbd=$('resBoard'); if(!box) return;
    if(rbd) rbd.style.display='';
    const s=rs.series, r=roundsWithResults(s).find(x=>x.rnd===rs.rnd);
    if(!r){box.innerHTML='';return;}
    const rows=D.results[rkey(r,s)]||[];
    /* one card per finishing position (P1, P2, P3). Two drivers on the same position share a card that flips on hover. */
    const byPos={};
    rows.forEach((x,i)=>{ if(bad.test(x.note||'')||x.pos<1||x.pos>3) return; (byPos[x.pos]=byPos[x.pos]||[]).push(i); });
    const groups=Object.keys(byPos).map(Number).sort((a,b)=>a-b).slice(0,3).map(pos=>byPos[pos].slice(0,2));
    const idxs=[].concat(...groups);
    if(!idxs.length){box.innerHTML='';return;}
    const face=(x,cls,tie)=>`<div class="lp-c p${x.pos}${cls}" data-name="${esc(x.name)}" style="--c:${esc(colorOf(s,x.team,x.name))}"><div class="lp-pos">${x.pos}</div><div class="lp-n">${esc(x.name)}</div><div class="lp-t">${esc(x.team||'')}</div>
      <div class="lp-tags">${x.pole?'<span class="tag pole">Pole</span>':''}${x.fl?'<span class="tag fl">Fastest Lap</span>':''}${x.half?'<span class="tag half">50% rule</span>':''}</div><div class="lp-p">${x.pts}<small>PTS</small></div>${x.gap?`<div class="lp-gap">${esc(x.gap)}</div>`:''}${x.note?`<div class="lp-note">${esc(x.note)}</div>`:''}${tie?`<div class="lp-tie">⇄ ${tie}</div>`:''}</div>`;
    box.innerHTML=`<div class="lp-pod">${groups.map(g=>{
      const x=rows[g[0]];
      if(g.length<2) return face(x,'','');
      const y=rows[g[1]];
      return `<div class="lp-flip p${x.pos}" tabindex="0" aria-label="P${x.pos} is shared by ${esc(x.name)} and ${esc(y.name)}. Hover to flip."><div class="lp-in">${face(x,' lp-front',`Tied P${x.pos} · 1 of 2 · hover to flip`)}${face(y,' lp-back',`Tied P${x.pos} · 2 of 2`)}</div></div>`;
    }).join('')}</div>`;
    box.onclick=e=>{
      const f=e.target.closest('.lp-flip');
      if(f&&window.matchMedia&&matchMedia('(hover:none)').matches&&!e.target.closest('.lp-n')){ f.classList.toggle('flipped'); return; }
      const c=e.target.closest('[data-name]'); if(c) openDriver(rs.series,c.dataset.name);
    };
    /* the table below carries on from P4 — drop the rows already on the podium */
    if(rbd){
      const trs=rbd.querySelectorAll('tbody tr'); idxs.forEach(i=>{ if(trs[i]) trs[i].remove(); });
      if(!rbd.querySelector('tbody tr')) rbd.style.display='none';
    }
  }
  if(!document.getElementById('lp-flip-css')){ const st=document.createElement('style'); st.id='lp-flip-css'; st.textContent=
   '.tag.half{border-color:#f5a623;color:#f5a623}'+
   '.lp-flip{perspective:1400px;outline:none}.lp-flip.p2{order:-1}.lp-flip .lp-in{display:grid;transform-style:preserve-3d;transition:transform .6s cubic-bezier(.4,.2,.2,1)}'+
   '.lp-flip .lp-c{grid-area:1/1;-webkit-backface-visibility:hidden;backface-visibility:hidden}.lp-flip .lp-c:hover{transform:none}'+
   '.lp-flip .lp-back,.lp-flip .lp-back:hover{transform:rotateY(180deg)}'+
   '.lp-flip:hover .lp-in,.lp-flip:focus .lp-in,.lp-flip.flipped .lp-in{transform:rotateY(180deg)}'+
   '.lp-tie{margin-top:10px;font-size:10px;font-weight:900;letter-spacing:1.5px;text-transform:uppercase;color:var(--c);opacity:.9}'+
   '@media(max-width:800px){.lp-flip.p1{order:-1}.lp-flip.p2{order:0}}'; document.head.appendChild(st); }
  const rb=$('resBoard');
  if(rb){
    rb.insertAdjacentHTML('beforebegin','<div id="lpBoard" style="margin-bottom:22px"></div>');
    const _rr=renderResults;
    renderResults=function(){_rr.apply(this,arguments);renderLP();};
    renderResults();
  }

  /* 3 ─ COMMAND PALETTE (Ctrl/⌘+K or "/") */
  const pal=document.createElement('div'); pal.id='vms-pal';
  pal.innerHTML='<div class="pal-box"><input class="pal-in" id="palIn" placeholder="Search drivers, teams, races…" autocomplete="off" spellcheck="false"><div class="pal-list" id="palList"></div><div class="pal-ft">↑↓ navigate · Enter open · Esc close</div></div>';
  document.body.appendChild(pal);
  const idx=[];
  SERIES.forEach(s=>{
    const seen=new Set();
    D.standings[s].drivers.forEach(d=>{ if(!d.name||d.name==='—') return; const k=canon(s,d.name); if(seen.has(k)) return; seen.add(k);
      idx.push({t:'Driver',s,name:d.name,sub:`${FULL[s]} · ${d.team||''}`,c:colorOf(s,d.team,d.name),go:()=>openDriver(s,d.name)}); });
    (D.info[s]||[]).forEach(t=>idx.push({t:'Team',s,name:t.name,sub:FULL[s],c:t.color||'#e8186d',go:()=>openTeam(s,t.name)}));
  });
  real.forEach(r=>idx.push({t:'Race',s:'f1',name:`R${r.rnd} ${r.name}`,sub:r.circuit,c:'#e8186d',go:()=>{ if(roundsWithResults('f1').find(x=>x.rnd===r.rnd)) {rs.series='f1';rs.rnd=r.rnd;renderResults();} go('results'); }}));
  let res=[], cur=0;
  function draw(){
    const q=$('palIn').value.trim().toLowerCase();
    res=(q?idx.filter(x=>(x.name+' '+x.sub).toLowerCase().includes(q)):idx.filter(x=>x.t==='Driver'&&x.s==='f1')).slice(0,40);
    if(cur>=res.length) cur=0;
    $('palList').innerHTML=res.length?res.map((x,i)=>`<div class="pal-it${i===cur?' on':''}" data-i="${i}" style="--c:${esc(x.c)}"><i></i><b>${esc(x.name)}</b><span>${esc(x.t)} · ${esc(x.sub)}</span></div>`).join(''):'<div class="empty">No matches</div>';
    const on=$('palList').querySelector('.on'); if(on) on.scrollIntoView({block:'nearest'});
  }
  const openP=()=>{pal.classList.add('open');$('palIn').value='';cur=0;draw();setTimeout(()=>$('palIn').focus(),20);};
  const closeP=()=>pal.classList.remove('open');
  const pick=i=>{const x=res[i]; if(!x) return; closeP(); x.go();};
  $('palIn').addEventListener('input',()=>{cur=0;draw();});
  $('palList').addEventListener('click',e=>{const it=e.target.closest('.pal-it'); if(it) pick(+it.dataset.i);});
  pal.addEventListener('click',e=>{if(e.target===pal) closeP();});
  document.addEventListener('keydown',e=>{
    const typing=/INPUT|TEXTAREA|SELECT/.test((document.activeElement||{}).tagName||'');
    if((e.key==='k'&&(e.ctrlKey||e.metaKey))||(e.key==='/'&&!typing&&!pal.classList.contains('open'))){e.preventDefault();openP();return;}
    if(!pal.classList.contains('open')) return;
    if(e.key==='Escape') closeP();
    else if(e.key==='ArrowDown'){e.preventDefault();cur=Math.min(cur+1,res.length-1);draw();}
    else if(e.key==='ArrowUp'){e.preventDefault();cur=Math.max(cur-1,0);draw();}
    else if(e.key==='Enter'){e.preventDefault();pick(cur);}
  });
  const dock=$('vms-tool-dock');
  if(dock){const b=document.createElement('button');b.type='button';b.id='vms-pal-btn';b.textContent='⌕ SEARCH';b.addEventListener('click',openP);dock.insertBefore(b,dock.firstChild);}
})();;
(function(){
  const $=id=>document.getElementById(id);
  const sub=$('stSub'), rpPane=document.querySelector('.st-pane[data-p="replay"]');
  if(!sub||!rpPane) return;
  sub.insertAdjacentHTML('beforeend','<button type="button" data-p="heat">Form Heatmap</button>');
  rpPane.insertAdjacentHTML('afterend','<div class="st-pane" data-p="heat"><section id="heatmap"><div class="section-head"><div><div class="title">Form <span class="yellow">Heatmap</span></div><div class="line"></div></div><span class="sub">Every finish · every round</span></div><div class="tabs" id="hmSeries"></div><div id="hmBoard"></div></section></div>');
  const hm={series:'f1'}, bad=/DNF|DSq|DSQ|DNS/i;
  const shade=p=>p===2?'#e8186d':p===3?'#ff6b00':p<=6?'rgba(26,86,196,.95)':p<=10?'rgba(26,86,196,.5)':'#1c1c1c';
  function renderHM(){
    const box=$('hmBoard'); if(!box) return;
    tabs($('hmSeries'),SERIES.map(s=>[s,FULL[s]]),hm.series,k=>{hm.series=k;renderHM();});
    const s=hm.series, rounds=roundsWithResults(s);
    if(!rounds.length){box.innerHTML='<div class="empty">No results yet.</div>';return;}
    const m={};
    rounds.forEach((r,ri)=>(D.results[rkey(r,s)]||[]).forEach(x=>{
      const k=canon(s,x.name), o=m[k]||(m[k]={name:x.name,cells:{},sum:0});
      o.cells[ri]=x; o.sum+=+x.pts||0; o.name=x.name;
    }));
    const stand={}; D.standings[s].drivers.forEach(d=>{stand[canon(s,d.name)]=+d.pts||0;});
    const list=Object.keys(m).map(k=>({k,...m[k],tot:k in stand?stand[k]:m[k].sum})).sort((a,b)=>b.tot-a.tot);
    const head=rounds.map(r=>`<th title="${esc(r.name)}"><small>${esc(r.flag&&r.flag.length<6?r.flag:'')}</small>R${esc(r.rnd)}</th>`).join('');
    const body=list.map(d=>`<tr><td class="nm" data-name="${esc(d.name)}">${esc(d.name)}</td>${rounds.map((r,ri)=>{
      const x=d.cells[ri]; if(!x) return '<td class="c e">·</td>';
      const dnf=bad.test(x.note||'');
      const tip=`${r.name}: ${dnf?'DNF':'P'+x.pos} · ${x.pts} pts${x.note?' · '+x.note:''}`;
      if(dnf) return `<td class="c x" title="${esc(tip)}">DNF</td>`;
      return `<td class="c${x.pos===1?' w':''}" style="${x.pos>1?'background:'+shade(x.pos):''}" title="${esc(tip)}">${x.pos}${x.pole?'<i></i>':''}${x.fl?'<i class="fl"></i>':''}</td>`;
    }).join('')}<td class="tot">${d.tot}</td></tr>`).join('');
    box.innerHTML=`<div class="hm-wrap"><table class="hm"><thead><tr><th></th>${head}<th>PTS</th></tr></thead><tbody>${body}</tbody></table></div>
      <div class="hm-leg"><span><b style="background:var(--grad)"></b>Win</span><span><b style="background:#e8186d"></b>P2</span><span><b style="background:#ff6b00"></b>P3</span><span><b style="background:rgba(26,86,196,.95)"></b>P4–6</span><span><b style="background:rgba(26,86,196,.5)"></b>P7–10</span><span><b style="background:#1c1c1c"></b>Outside points</span><span><b style="background:#2a0e10"></b>DNF</span><span><b style="background:#fff;width:6px;height:6px;border-radius:50%"></b>Pole</span><span><b style="background:#f5a623;width:6px;height:6px;border-radius:50%"></b>Fastest lap</span></div>`;
    box.onclick=e=>{const c=e.target.closest('.nm'); if(c) openDriver(s,c.dataset.name);};
  }
  const _sp=stPane;
  stPane=function(p){_sp.apply(this,arguments); if(p==='heat') renderHM();};
  if(stp.p==='heat') renderHM();
})();;
(function(){
  const nav=document.getElementById('tmSub'); if(!nav) return;
  nav.onclick=e=>{const b=e.target.closest('button[data-p]'); if(!b) return;
    nav.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
    document.querySelectorAll('.tm-pane').forEach(x=>x.classList.toggle('on',x.dataset.p===b.dataset.p));
    if(b.dataset.p==='tmh2h') renderHeadToHead();};
})();

/* ───────── News: FIA announcements + media (data/fia.json, data/media.json — written by the Discord sync) ───────── */
const nw={tab:'fia',fia:null,media:null,at:0};

/* ───────── layout fixes: one-line top bar + smaller news/media boxes ───────── */
(function(){
  if(document.getElementById('vx-fix-css')) return;
  const st=document.createElement('style'); st.id='vx-fix-css'; st.textContent=
   /* top bar: keep every link on one line, scale down a little when space is tight, scroll sideways on phones */
   'header nav{display:flex!important;flex-wrap:nowrap!important;align-items:center;white-space:nowrap;gap:clamp(8px,1.3vw,22px)!important;min-width:0;overflow-x:auto;scrollbar-width:none}'+
   'header nav::-webkit-scrollbar{display:none}'+
   'header nav a{white-space:nowrap!important;flex:0 0 auto;margin:0!important;font-size:clamp(10px,.95vw,13px)!important;letter-spacing:clamp(.5px,.1vw,1.5px)!important}'+
   /* news: compact cards, small media tiles */
   '#newsBoard .nw-list{max-width:760px}'+
   '#newsBoard .nw-card,#newsBoard .nw-tile{height:auto!important;min-height:0!important;align-self:start}'+
   '#newsBoard .nw-grid{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(210px,1fr))!important;gap:14px!important;align-items:start}'+
   '#newsBoard .nw-media{max-height:170px;overflow:hidden}'+
   '#newsBoard .nw-tile .nw-img,#newsBoard .nw-tile .nw-vid{width:100%!important;height:170px!important;max-height:170px!important;object-fit:cover;display:block;cursor:zoom-in}'+
   '#newsBoard .nw-card .nw-img,#newsBoard .nw-card .nw-vid{max-width:100%;max-height:240px;width:auto;height:auto;object-fit:contain;cursor:zoom-in}'+
   '#newsBoard .nw-cap{padding:10px 12px}#newsBoard .nw-cap .nw-text{font-size:12px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}';
  document.head.appendChild(st);
})();
function nwDate(iso){ try{ return new Date(iso).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}); }catch(e){ return ''; } }
function nwSafe(u){ return /^(https?:\/\/|media\/)/.test(u||'')?u:''; }
function nwRich(t){
  let s=esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
  s=s.replace(/(https?:\/\/(?:[^\s<&]|&amp;)+)/g,u=>'<a href="'+u+'" target="_blank" rel="noopener">'+u+'</a>');
  return s.replace(/\n/g,'<br>');
}
function nwFile(it,f,tile){
  const u=nwSafe(f.path);
  if(!u) return '<a class="nw-ext" href="'+esc(it.url)+'" target="_blank" rel="noopener">'+esc(f.name||'Open on Discord')+' ↗</a>';
  if(f.type==='image') return '<img class="nw-img" loading="lazy" src="'+esc(u)+'" alt="'+esc(f.name||'')+'" data-zoom="'+esc(u)+'">';
  if(f.type==='video') return '<video class="nw-vid" controls preload="metadata" src="'+esc(u)+'"></video>';
  return '<a class="nw-ext" href="'+esc(u)+'" target="_blank" rel="noopener">📎 '+esc(f.name||'Download')+'</a>';
}
function nwLinks(it){ return (it.links||[]).map(l=>nwSafe(l)?'<a class="nw-ext" href="'+esc(l)+'" target="_blank" rel="noopener">'+esc(l.replace(/^https?:\/\//,''))+' ↗</a>':'').join(''); }
function renderNews(){
  const box=document.getElementById('newsBoard'); if(!box) return;
  const items=nw[nw.tab];
  if(items===null){ box.innerHTML='<div class="empty">Loading…</div>'; return; }
  if(!items.length){ box.innerHTML='<div class="empty">'+(nw.tab==='fia'?'No FIA announcements yet.':'No media yet.')+'</div>'; return; }
  if(nw.tab==='fia'){
    box.innerHTML='<div class="nw-list">'+items.map(it=>'<article class="nw-card"><div class="nw-meta"><b>'+esc(it.author)+'</b><span>'+esc(nwDate(it.date))+'</span></div>'+
      (it.text?'<div class="nw-text">'+nwRich(it.text)+'</div>':'')+
      ((it.files||[]).length?'<div class="nw-files">'+it.files.map(f=>nwFile(it,f)).join('')+'</div>':'')+
      (nwLinks(it)?'<div class="nw-files">'+nwLinks(it)+'</div>':'')+'</article>').join('')+'</div>';
  }else{
    box.innerHTML='<div class="nw-grid">'+items.map(it=>'<article class="nw-tile"><div class="nw-media">'+
      ((it.files||[]).map(f=>nwFile(it,f)).join('')+nwLinks(it))+'</div><div class="nw-cap"><div class="nw-meta"><b>'+esc(it.author)+'</b><span>'+esc(nwDate(it.date))+'</span></div>'+
      (it.text?'<div class="nw-text">'+nwRich(it.text)+'</div>':'')+'</div></article>').join('')+'</div>';
  }
}
async function loadNews(force){
  renderNews();
  if(!force&&nw.fia&&nw.media&&Date.now()-nw.at<5*60*1000) return;
  const get=async f=>{ try{ const r=await fetch('data/'+f+'?t='+Date.now(),{cache:'no-store'}); return r.ok?await r.json():[]; }catch(e){ return []; } };
  const [fia,media]=await Promise.all([get('fia.json'),get('media.json')]);
  nw.fia=fia; nw.media=media; nw.at=Date.now(); renderNews();
}
(function(){
  const nav=document.getElementById('newsSub'); if(!nav) return;
  nav.onclick=e=>{ const b=e.target.closest('button[data-p]'); if(!b) return;
    nav.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b)); nw.tab=b.dataset.p; renderNews(); };
  document.getElementById('newsBoard').addEventListener('click',e=>{
    const z=e.target.closest('[data-zoom]'); if(!z) return;
    const o=document.createElement('div'); o.className='nw-light'; o.innerHTML='<img src="'+esc(z.dataset.zoom)+'" alt="">';
    o.onclick=()=>o.remove(); document.body.appendChild(o); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ const o=document.querySelector('.nw-light'); if(o) o.remove(); } });
  setInterval(()=>{ const v=document.getElementById('view-news'); if(v&&v.classList.contains('on')&&!document.hidden) loadNews(true); },5*60*1000);
})();

/* ───────── live lineup sync ─────────
   The Discord sync (GitHub Action) rewrites data/lineups.json. Every few minutes — and whenever the tab
   comes back into view — check for a change and reload so every page picks up the new lineups. */
(function(){
  let last=JSON.stringify(window.VMS_LINEUPS);
  async function check(){
    try{
      const r=await fetch('data/lineups.json?t='+Date.now(),{cache:'no-store'}); if(!r.ok) return;
      const now=JSON.stringify(await r.json()); if(now===last) return; last=now;
      const t=document.createElement('div');
      t.textContent='Lineups updated — refreshing…';
      t.style.cssText='position:fixed;left:50%;top:18px;transform:translateX(-50%);z-index:2000;background:#0b0b0b;border:1px solid #e8186d;color:#fff;padding:12px 20px;font:700 12px Arial;letter-spacing:1px;text-transform:uppercase';
      document.body.appendChild(t); setTimeout(()=>location.reload(),1500);
    }catch(e){}
  }
  setInterval(check,5*60*1000);
  document.addEventListener('visibilitychange',()=>{ if(!document.hidden) check(); });
})();

/* ═══════════════════════════════════════════════════════════════════════════
   VMS ADD-ONS
   1. Race sessions in the viewer's own timezone (home countdown box + calendar)
   2. Add-to-calendar (.ics) per round + full-season download
   3. Shareable image cards (results, standings, driver profile)
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){
  const $=id=>document.getElementById(id);

  /* ───────── styles ───────── */
  if(!$('vx-css')){ const st=document.createElement('style'); st.id='vx-css'; st.textContent=
   '.vx-bar{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin:0 0 16px;color:#999;font-size:13px}'+
   '.vx-bar b{color:#fff}'+
   '.vx-btn{background:linear-gradient(90deg,#e8186d,#ff6b00);color:#fff;border:0;padding:10px 16px;font:800 12px Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;cursor:pointer}'+
   '.vx-btn:hover{filter:brightness(1.12)}.vx-btn.ghost{background:transparent;border:1px solid #444;color:#ddd}'+
   '.vx-mini{background:transparent;border:1px solid #444;color:#ddd;padding:5px 9px;font:700 10px Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;cursor:pointer}'+
   '.vx-mini:hover{border-color:#e8186d;color:#fff}'+
   '.vx-tz{margin-top:10px;padding-top:10px;border-top:1px solid #2a2a2a;display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center;font-size:11px;color:#aaa}'+
   '.vx-tz span b{color:#fff;margin-right:4px}'+
   '#tzBox{margin-top:14px;padding:14px 16px;border:1px solid #2a2a2a;background:rgba(255,255,255,.03);font-size:12px;color:#aaa;display:flex;flex-wrap:wrap;gap:8px 18px;align-items:center}'+
   '#tzBox .tz-h{font-weight:900;letter-spacing:1.5px;text-transform:uppercase;font-size:10px;color:#e8186d;width:100%}'+
   '#tzBox b{color:#fff}'+
   '.vx-pv{position:fixed;inset:0;z-index:3000;background:rgba(0,0,0,.88);display:none;align-items:center;justify-content:center;padding:18px;flex-direction:column;gap:14px}'+
   '.vx-pv.open{display:flex}.vx-pv img{max-height:78vh;max-width:100%;box-shadow:0 10px 60px #000}'+
   '.vx-pv .vx-acts{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}'+
   '';
   document.head.appendChild(st); }

  /* ═════════ 1 + 2. SESSION TIMES IN YOUR TIMEZONE + .ICS ═════════ */
  const NY='America/New_York';
  const TZ=(function(){ try{ return Intl.DateTimeFormat().resolvedOptions().timeZone||''; }catch(e){ return ''; } })();
  /* league times are given in US Eastern — convert properly, so the Nov rounds (after DST ends) are right too */
  function nyToUtc(y,mo,d,h,mi){
    for(const off of [4,5]){
      const t=Date.UTC(y,mo,d,h+off,mi||0);
      const p=new Intl.DateTimeFormat('en-US',{timeZone:NY,hour:'numeric',hour12:false,day:'numeric'}).formatToParts(new Date(t));
      const hh=+p.find(x=>x.type==='hour').value%24, dd=+p.find(x=>x.type==='day').value;
      if(hh===h&&dd===d) return t;
    }
    return Date.UTC(y,mo,d,h+5,mi||0);
  }
  function sessionsFor(r){
    const out=[];
    (r.series||[]).forEach(s=>{
      const sd=D.sessions&&D.sessions[s]; if(!sd) return;
      const m=String(sd.time).match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i); if(!m) return;
      let h=+m[1]%12; if(/pm/i.test(m[3])) h+=12;
      const ds=/sun/i.test(sd.day)?(r.sunDate||r.satDate):r.satDate;
      const p=String(ds||'').trim().split(' '); const mo=MON[p[0]], d=parseInt(p[1]);
      if(mo===undefined||isNaN(d)) return;
      out.push({s,t:nyToUtc(2026,mo,d,h,+m[2])});
    });
    return out.sort((a,b)=>a.t-b.t);
  }
  const fmtDay=t=>new Date(t).toLocaleString(undefined,{weekday:'short',month:'short',day:'numeric'});
  const fmtTime=t=>new Date(t).toLocaleString(undefined,{hour:'numeric',minute:'2-digit'});
  const tzShort=t=>{ try{ const p=new Intl.DateTimeFormat(undefined,{timeZoneName:'short'}).formatToParts(new Date(t)); return (p.find(x=>x.type==='timeZoneName')||{}).value||''; }catch(e){ return ''; } };
  const tzNice=TZ.replace(/_/g,' ')||'your timezone';

  /* home page: sessions under the next-race box */
  (function(){
    const nb=$('nextBox'); if(!nb) return;
    const r=nextRace(); if(!r) return;
    const ss=sessionsFor(r); if(!ss.length) return;
    const box=document.createElement('div'); box.id='tzBox';
    box.innerHTML='<div class="tz-h">Race sessions · your time ('+esc(tzNice)+')</div>'+
      ss.map(x=>'<span><b>'+esc(FULL[x.s])+'</b> '+esc(fmtDay(x.t))+' · '+esc(fmtTime(x.t))+' '+esc(tzShort(x.t))+'</span>').join('')+
      '<button type="button" class="vx-mini" id="icsNext">📅 Add to calendar</button>';
    nb.parentNode.appendChild(box);
    $('icsNext').onclick=()=>downloadIcs([r],'VMS-R'+r.rnd+'-'+r.name.replace(/[^A-Za-z0-9]+/g,'-')+'.ics');
  })();

  /* calendar page: toolbar + per-round times */
  function decorateCalendar(){
    const grid=$('calGrid'); if(!grid) return;
    if(!$('calTools')){
      grid.insertAdjacentHTML('beforebegin','<div id="calTools" class="vx-bar"><span>🕒 Session times shown in <b>'+esc(tzNice)+'</b></span><button type="button" class="vx-btn" id="icsAll">📅 Download full season (.ics)</button><button type="button" class="vx-btn ghost" id="icsLeft">Remaining rounds only</button></div>');
      $('icsAll').onclick=()=>downloadIcs(real,'VMS-2026-season.ics');
      $('icsLeft').onclick=()=>downloadIcs(real.filter(r=>{const e=raceEnd(r); return e&&e.getTime()>Date.now();}),'VMS-2026-remaining.ics');
    }
    grid.querySelectorAll('.round').forEach(el=>{
      if(el.classList.contains('break')||el.querySelector('.vx-tz')) return;
      const bEl=el.querySelector('b'); const m=bEl&&bEl.textContent.match(/ROUND\s+(\S+)/i); if(!m) return;
      const r=real.find(x=>x.rnd===m[1]); if(!r) return;
      const ss=sessionsFor(r); if(!ss.length) return;
      const upcoming=(raceEnd(r)||0)>Date.now();
      const div=document.createElement('div'); div.className='vx-tz';
      div.innerHTML=ss.map(x=>'<span><b>'+x.s.toUpperCase()+'</b>'+esc(fmtDay(x.t))+' '+esc(fmtTime(x.t))+'</span>').join('')+(upcoming?'<button type="button" class="vx-mini">📅 Add</button>':'');
      el.appendChild(div);
      const btn=div.querySelector('button');
      if(btn) btn.addEventListener('click',e=>{ e.stopPropagation(); downloadIcs([r],'VMS-R'+r.rnd+'.ics'); });
    });
  }
  decorateCalendar();

  const icsText=s=>String(s).replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n');
  const icsFold=l=>{ const o=[]; while(l.length>60){ o.push(l.slice(0,60)); l=' '+l.slice(60); } o.push(l); return o.join('\r\n'); };
  const icsZ=t=>new Date(t).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
  function buildIcs(rounds){
    const L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Velocity Motorsport Series//Race Calendar 2026//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:VMS 2026 Race Calendar'];
    rounds.forEach(r=>sessionsFor(r).forEach(x=>{
      L.push('BEGIN:VEVENT','UID:vms-2026-r'+r.rnd+'-'+x.s+'@velocitymotorsportseries','DTSTAMP:'+icsZ(Date.now()),'DTSTART:'+icsZ(x.t),'DTEND:'+icsZ(x.t+90*60000),
        'SUMMARY:'+icsText(FULL[x.s]+' · R'+r.rnd+' '+r.name),'LOCATION:'+icsText(r.circuit),
        'DESCRIPTION:'+icsText(FULL[x.s]+' race session · Round '+r.rnd+' · '+r.circuit),
        'BEGIN:VALARM','TRIGGER:-PT30M','ACTION:DISPLAY','DESCRIPTION:'+icsText(FULL[x.s]+' starts in 30 minutes'),'END:VALARM','END:VEVENT');
    }));
    L.push('END:VCALENDAR');
    return L.map(icsFold).join('\r\n')+'\r\n';
  }
  function saveBlob(name,blob){
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name;
    document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },800);
  }
  function downloadIcs(rounds,name){
    if(!rounds.length){ alert('No upcoming sessions to add.'); return; }
    saveBlob(name,new Blob([buildIcs(rounds)],{type:'text/calendar;charset=utf-8'}));
  }

  const teamColor=(s,team,name)=>{ const c=conFor(s,team); return (c&&c.color)||(lineupFor(s,name)||{}).color||'#e8186d'; };
  const DNFRE=/DNF|DSq|DSQ|DNS/i;

  /* ═════════ 3. SHARE-AS-IMAGE CARDS ═════════ */
  const CW=1080, CH=1350;
  function rr(x,a,b,w,h,r){ x.beginPath(); x.moveTo(a+r,b); x.arcTo(a+w,b,a+w,b+h,r); x.arcTo(a+w,b+h,a,b+h,r); x.arcTo(a,b+h,a,b,r); x.arcTo(a,b,a+w,b,r); x.closePath(); }
  function tx(x,str,px,py,o){ o=o||{}; x.font=o.font||'700 28px Arial, sans-serif'; x.fillStyle=o.color||'#fff'; x.textAlign=o.align||'left'; x.textBaseline=o.base||'alphabetic'; x.fillText(String(str),px,py,o.max); }
  function frame(x,lg,kicker,title,sub){
    const g=x.createLinearGradient(0,0,CW,CH); g.addColorStop(0,'#0b0b0b'); g.addColorStop(1,'#1c0a14'); x.fillStyle=g; x.fillRect(0,0,CW,CH);
    const a=x.createLinearGradient(0,0,CW,0); a.addColorStop(0,'#e8186d'); a.addColorStop(1,'#ff6b00'); x.fillStyle=a; x.fillRect(0,0,CW,14); x.fillRect(0,CH-14,CW,14);
    if(lg){ const h=84, w=Math.min(lg.width/lg.height*h,260); x.drawImage(lg,60,48,w,h); } else tx(x,'VMS',60,118,{font:'900 64px Arial, sans-serif'});
    tx(x,'VELOCITY MOTORSPORT SERIES',CW-60,86,{font:'800 22px Arial, sans-serif',color:'#999',align:'right'});
    tx(x,'2026 SEASON',CW-60,118,{font:'800 22px Arial, sans-serif',color:'#e8186d',align:'right'});
    tx(x,String(kicker).toUpperCase(),60,215,{font:'900 28px Arial, sans-serif',color:'#e8186d'});
    tx(x,String(title).toUpperCase(),60,272,{font:'900 50px Arial, sans-serif',max:CW-120});
    if(sub) tx(x,sub,60,314,{font:'600 24px Arial, sans-serif',color:'#999',max:CW-120});
    tx(x,'OFFICIAL LEAGUE WEBSITE',CW/2,CH-34,{font:'800 18px Arial, sans-serif',color:'#666',align:'center'});
  }
  function loadLogo(){ return new Promise(res=>{ const i=new Image(); i.onload=()=>res(i); i.onerror=()=>res(null); i.src='assets/logo.png'; }); }
  async function render(draw,file){
    const logo=await loadLogo();
    const once=lg=>new Promise((res,rej)=>{ try{ const c=document.createElement('canvas'); c.width=CW; c.height=CH; draw(c.getContext('2d'),lg); c.toBlob(b=>b?res(b):rej(new Error('blob')),'image/png'); }catch(e){ rej(e); } });
    let blob; try{ blob=await once(logo); }catch(e){ blob=await once(null); }
    preview(blob,file);
  }
  function preview(blob,file){
    let pv=$('vxPv'); if(!pv){ pv=document.createElement('div'); pv.id='vxPv'; pv.className='vx-pv'; pv.addEventListener('click',e=>{ if(e.target===pv) pv.classList.remove('open'); }); document.body.appendChild(pv); }
    const url=URL.createObjectURL(blob), file1=new File([blob],file,{type:'image/png'});
    const canShare=navigator.canShare&&navigator.canShare({files:[file1]}), canCopy=window.ClipboardItem&&navigator.clipboard&&navigator.clipboard.write;
    pv.innerHTML='<img src="'+url+'" alt="Share card"><div class="vx-acts"><button type="button" class="vx-btn" data-a="dl">⬇ Download PNG</button>'+(canCopy?'<button type="button" class="vx-btn ghost" data-a="cp">Copy image</button>':'')+(canShare?'<button type="button" class="vx-btn ghost" data-a="sh">Share…</button>':'')+'<button type="button" class="vx-btn ghost" data-a="x">Close</button></div>';
    pv.onclick=async e=>{
      const a=e.target.closest('[data-a]'); if(!a){ if(e.target===pv) pv.classList.remove('open'); return; }
      const k=a.dataset.a;
      if(k==='dl') saveBlob(file,blob);
      else if(k==='cp'){ try{ await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]); a.textContent='Copied ✓'; }catch(err){ a.textContent='Copy failed'; } }
      else if(k==='sh'){ try{ await navigator.share({files:[file1],title:'VMS'}); }catch(err){} }
      else pv.classList.remove('open');
    };
    pv.classList.add('open');
  }
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ const pv=$('vxPv'); if(pv) pv.classList.remove('open'); } });

  /* ranked-list card: used by results and standings */
  function shareList(o){
    render((x,lg)=>{
      frame(x,lg,o.kicker,o.title,o.sub);
      const top=350, rh=90, gap=6;
      o.rows.slice(0,10).forEach((r,i)=>{
        const y=top+i*(rh+gap);
        x.fillStyle='rgba(255,255,255,.05)'; rr(x,60,y,CW-120,rh,6); x.fill();
        x.fillStyle=r.color||'#e8186d'; x.fillRect(60,y,10,rh);
        tx(x,r.left,118,y+rh/2+14,{font:'900 40px Arial, sans-serif',color:i<3?'#e8186d':'#fff',align:'center'});
        tx(x,r.name,176,y+40,{font:'800 34px Arial, sans-serif',max:560});
        if(r.sub) tx(x,r.sub,176,y+72,{font:'600 22px Arial, sans-serif',color:'#999',max:560});
        tx(x,r.right,CW-92,y+(r.rlab?50:rh/2+14),{font:'900 40px Arial, sans-serif',align:'right'});
        if(r.rlab) tx(x,r.rlab,CW-92,y+76,{font:'800 15px Arial, sans-serif',color:'#999',align:'right'});
      });
    },o.file);
  }

  function shareBar(id,after,label,onclick){
    if($(id)||!after) return;
    const d=document.createElement('div'); d.className='vx-bar'; d.id=id;
    d.innerHTML='<button type="button" class="vx-btn">🖼️ '+label+'</button>';
    after.insertAdjacentElement('afterend',d); d.firstChild.onclick=onclick;
  }

  /* results page */
  shareBar('shRes',$('resMeta'),'Share results as image',()=>{
    const s=rs.series; const have=roundsWithResults(s);
    const race=have.find(r=>r.rnd===rs.rnd)||have[have.length-1]; if(!race) return;
    const rows=D.results[rkey(race,s)]||[];
    shareList({file:'VMS-'+s.toUpperCase()+'-R'+race.rnd+'-results.png',kicker:FULL[s]+' · Race Results',title:'R'+race.rnd+' · '+race.name,sub:race.circuit,
      rows:rows.slice(0,10).map(r=>({left:'P'+r.pos,name:r.name,sub:[r.team,r.pole?'POLE':'',r.fl?'FASTEST LAP':''].filter(Boolean).join('  ·  '),right:'+'+r.pts,rlab:'PTS',color:teamColor(s,r.team,r.name)}))});
  });

  /* standings page */
  shareBar('shSt',$('stView'),'Share standings as image',()=>{
    const s=st.series, data=D.standings[s];
    if(st.view==='drivers'){
      const list=data.drivers.filter(d=>!d.hidden&&d.name&&d.name!=='—').slice().sort((a,b)=>b.pts-a.pts), top=list[0]?list[0].pts:0;
      shareList({file:'VMS-'+s.toUpperCase()+'-driver-standings.png',kicker:FULL[s]+' · Drivers\' Championship',title:'Championship Standings',sub:'Top 10 after '+roundsWithResults(s).length+' rounds',
        rows:list.slice(0,10).map((d,i)=>({left:String(i+1),name:d.name,sub:(d.team||'')+(i?'  ·  -'+(top-d.pts):''),right:String(d.pts),rlab:'PTS',color:teamColor(s,d.team,d.name)}))});
    }else{
      const list=data.constructors.slice().sort((a,b)=>b.pts-a.pts), top=list[0]?list[0].pts:0;
      shareList({file:'VMS-'+s.toUpperCase()+'-constructor-standings.png',kicker:FULL[s]+' · Constructors\' Championship',title:'Team Standings',sub:'Top 10 after '+roundsWithResults(s).length+' rounds',
        rows:list.slice(0,10).map((c,i)=>({left:String(i+1),name:c.name,sub:i?'-'+(top-c.pts)+' behind the leader':'Championship leader',right:String(c.pts),rlab:'PTS',color:c.color}))});
    }
  });

  /* driver profile card (adds a button inside the existing driver modal) */
  function driverCard(s,name){
    const c=canon(s,name), d=D.standings[s].drivers.find(x=>canon(s,x.name)===c); if(!d) return;
    const li=lineupFor(s,name), S=driverStats(s,d), col=teamColor(s,d.team,d.name);
    const results=[]; real.forEach(r=>{ const hit=(D.results[rkey(r,s)]||[]).find(x=>canon(s,x.name)===c); if(hit) results.push({r,hit}); });
    render((x,lg)=>{
      frame(x,lg,FULL[s]+(li&&li.num&&li.num!=='—'?' · #'+li.num:'')+' · Driver Profile',d.name,d.team||'');
      x.fillStyle=col; x.fillRect(60,330,CW-120,8);
      const tiles=[['P'+(S.pos||'–'),'STANDING'],[String(S.pts),'POINTS'],[String(S.wins),'WINS'],[String(S.pods),'PODIUMS'],[S.poles+' / '+S.fls,'POLES / FL'],[S.avg!=null?S.avg.toFixed(1):'–','AVG FINISH']];
      tiles.forEach((t,i)=>{ const cx=60+(i%3)*(CW-120+20)/3, cy=370+Math.floor(i/3)*170, w=(CW-120-40)/3;
        x.fillStyle='rgba(255,255,255,.05)'; rr(x,cx,cy,w,150,8); x.fill();
        tx(x,t[0],cx+w/2,cy+82,{font:'900 60px Arial, sans-serif',align:'center',max:w-20});
        tx(x,t[1],cx+w/2,cy+122,{font:'800 18px Arial, sans-serif',color:'#999',align:'center'}); });
      tx(x,'RECENT RESULTS',60,740,{font:'900 24px Arial, sans-serif',color:'#e8186d'});
      results.slice(-6).reverse().forEach((q,i)=>{ const y=765+i*78;
        x.fillStyle='rgba(255,255,255,.05)'; rr(x,60,y,CW-120,68,6); x.fill();
        tx(x,'R'+q.r.rnd,90,y+44,{font:'900 26px Arial, sans-serif',color:'#999'});
        tx(x,q.r.name,170,y+44,{font:'700 28px Arial, sans-serif',max:520});
        tx(x,(DNFRE.test(q.hit.note||'')?'DNF':'P'+q.hit.pos)+(q.hit.pole?' · POLE':'')+(q.hit.fl?' · FL':''),CW-250,y+44,{font:'800 26px Arial, sans-serif',align:'right',max:260});
        tx(x,'+'+q.hit.pts,CW-90,y+44,{font:'900 30px Arial, sans-serif',align:'right',color:'#e8186d'}); });
    },'VMS-'+s.toUpperCase()+'-'+String(d.name).replace(/[^A-Za-z0-9]+/g,'-')+'.png');
  }
  const _od=openDriver;
  openDriver=function(s,name){
    _od.apply(this,arguments);
    const mb=$('modalBox'); if(!mb) return;
    mb.insertAdjacentHTML('beforeend','<div class="vx-bar" style="margin-top:16px"><button type="button" class="vx-btn" data-share="1">🖼️ Share driver card</button></div>');
    const b=mb.querySelector('[data-share]'); if(b) b.onclick=()=>driverCard(s,name);
  };

})();

/* ═════════ VMS EXTRAS: Points Race · Podium share card · confetti · 3D tilt cards ═════════ */
(function(){
  const $=id=>document.getElementById(id);
  const css=document.createElement('style'); css.id='vx-extra-css'; css.textContent=
      '#vx-conf{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:99999}'+
   '.pr-wrap{overflow-x:auto}.pr-svg{width:100%;min-width:640px;height:auto;display:block}'+
   '.pr-svg .ln{cursor:pointer;transition:opacity .2s}.pr-svg path.l{fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:prd 1.4s ease forwards}'+
   '@keyframes prd{to{stroke-dashoffset:0}}.pr-svg.hl .ln{opacity:.12}.pr-svg.hl .ln.on{opacity:1}.pr-svg.hl .ln.on path.l{stroke-width:4}'+
   '.pr-svg text{font:700 11px Arial,sans-serif;fill:#888}.pr-svg text.nm{font-size:12px}'+
   '.vx-share{background:transparent;border:1px solid #444;color:#ddd;padding:8px 14px;font:800 11px Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;cursor:pointer;margin-left:auto}'+
   '.vx-share:hover{border-color:#e8186d;color:#fff}';
  document.head.appendChild(css);

  /* confetti (click a champion card, or ↑↑↓↓←→←→BA) */
  function confetti(){
    if($('vx-conf')) return; const c=document.createElement('canvas'); c.id='vx-conf'; document.body.appendChild(c);
    const x=c.getContext('2d'); c.width=innerWidth; c.height=innerHeight;
    const col=['#e8186d','#ff6b00','#ffd34e','#ffffff','#1a56c4'];
    const p=Array.from({length:170},()=>({x:c.width/2+(Math.random()-.5)*200,y:c.height*.62,vx:(Math.random()-.5)*16,vy:-8-Math.random()*13,s:5+Math.random()*7,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:col[Math.random()*col.length|0]}));
    let n=0; (function f(){
      x.clearRect(0,0,c.width,c.height); p.forEach(a=>{a.vy+=.38;a.vx*=.99;a.x+=a.vx;a.y+=a.vy;a.r+=a.vr;x.save();x.translate(a.x,a.y);x.rotate(a.r);x.fillStyle=a.c;x.fillRect(-a.s/2,-a.s/4,a.s,a.s/2);x.restore();});
      if(++n<190) requestAnimationFrame(f); else c.remove();
    })();
  }
  document.addEventListener('click',e=>{ if(e.target.closest('.champ')) confetti(); });
  const kc=[38,38,40,40,37,39,37,39,66,65]; let ki=0;
  document.addEventListener('keydown',e=>{ ki=(e.keyCode===kc[ki])?ki+1:(e.keyCode===kc[0]?1:0); if(ki===kc.length){ki=0;confetti();} });

  /* ───── Points Race: cumulative points line chart (Standings → Points Race) ───── */
  const sub=$('stSub'), anchor=document.querySelector('.st-pane[data-p="heat"]')||document.querySelector('.st-pane[data-p="replay"]');
  const pr={series:'f1'}, PAL=['#e8186d','#ff6b00','#ffd34e','#37d6c4','#9b7bff','#7fb2ff','#b8f35a','#ff8fb3'];
  function prRender(){
    const box=$('prBoard'); if(!box) return;
    tabs($('prSeries'),SERIES.map(s=>[s,FULL[s]]),pr.series,k=>{pr.series=k;prRender();});
    const s=pr.series, rounds=roundsWithResults(s);
    if(rounds.length<2){box.innerHTML='<div class="empty">Needs at least two rounds of results.</div>';return;}
    const m={};
    rounds.forEach((r,i)=>(D.results[rkey(r,s)]||[]).forEach(x=>{
      const k=canon(s,x.name), o=m[k]||(m[k]={name:x.name,team:x.team,v:rounds.map(()=>0)}); o.v[i]+=+x.pts||0; o.team=x.team||o.team;
    }));
    const list=Object.values(m).map(o=>{let a=0; o.cum=o.v.map(v=>a+=v); o.tot=a; return o;}).sort((a,b)=>b.tot-a.tot).slice(0,8);
    const used=new Set(); list.forEach((o,i)=>{const c=conFor(s,o.team); let col=c&&c.color; if(!col||used.has(col)) col=PAL.find(p=>!used.has(p))||PAL[i]; used.add(col); o.col=col;});
    const W=900,H=420,L=46,R=120,T=16,B=34, max=Math.max(...list.map(o=>o.tot))||1, n=rounds.length;
    const X=i=>L+i*(W-L-R)/(n-1), Y=v=>T+(1-v/max)*(H-T-B);
    const grid=[0,.25,.5,.75,1].map(f=>{const y=Y(max*f); return `<line x1="${L}" x2="${W-R}" y1="${y}" y2="${y}" stroke="#262626"/><text x="${L-8}" y="${y+4}" text-anchor="end">${Math.round(max*f)}</text>`;}).join('');
    const xs=rounds.map((r,i)=>`<text x="${X(i)}" y="${H-12}" text-anchor="middle">R${esc(r.rnd)}</text>`).join('');
    let last=-99; const ends=list.map((o,i)=>({o,y:Y(o.tot)})).sort((a,b)=>a.y-b.y).map(e=>{e.ly=Math.max(e.y,last+14); last=e.ly; return e;});
    const ly=new Map(ends.map(e=>[e.o,e.ly]));
    const lines=list.map(o=>`<g class="ln" data-name="${esc(o.name)}"><path class="l" pathLength="1" stroke="${o.col}" d="${o.cum.map((v,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(v).toFixed(1)).join(' ')}"/>${
      o.cum.map((v,i)=>`<circle cx="${X(i)}" cy="${Y(v)}" r="3.2" fill="${o.col}"><title>${esc(o.name)} · ${esc(rounds[i].name)} · ${v} pts</title></circle>`).join('')
    }<text class="nm" x="${W-R+10}" y="${ly.get(o)+4}" fill="${o.col}" style="fill:${o.col}">${esc(o.name)} ${o.tot}</text></g>`).join('');
    box.innerHTML=`<div class="pr-wrap"><svg class="pr-svg" viewBox="0 0 ${W} ${H}">${grid}${xs}${lines}</svg></div>`;
    const svg=box.querySelector('svg');
    svg.onmouseover=e=>{const g=e.target.closest('.ln'); svg.classList.toggle('hl',!!g); svg.querySelectorAll('.ln').forEach(x=>x.classList.toggle('on',x===g));};
    svg.onmouseleave=()=>{svg.classList.remove('hl');};
    svg.onclick=e=>{const g=e.target.closest('.ln'); if(g) openDriver(s,g.dataset.name);};
  }
  if(sub&&anchor&&!document.querySelector('.st-pane[data-p="pace"]')){
    sub.insertAdjacentHTML('beforeend','<button type="button" data-p="pace">Points Race</button>');
    anchor.insertAdjacentHTML('afterend','<div class="st-pane" data-p="pace"><section id="pacechart"><div class="section-head"><div><div class="title">Points <span class="yellow">Race</span></div><div class="line"></div></div><span class="sub">Cumulative points · top 8 · hover a line</span></div><div class="tabs" id="prSeries"></div><div id="prBoard"></div></section></div>');
    const _sp=stPane; stPane=function(p){_sp.apply(this,arguments); if(p==='pace') prRender();};
    if(stp.p==='pace') prRender();
  }

  /* ───── Podium share card (Results → Share podium → PNG) ───── */
  function podiumCard(){
    const s=rs.series, race=real.find(r=>r.rnd===rs.rnd), rows=race&&D.results[rkey(race,s)]; if(!rows) return;
    const W=1080,H=1350,c=document.createElement('canvas'); c.width=W; c.height=H; const x=c.getContext('2d');
    const bg=x.createLinearGradient(0,0,W,H); bg.addColorStop(0,'#0b0b0f'); bg.addColorStop(1,'#1a0a14'); x.fillStyle=bg; x.fillRect(0,0,W,H);
    const g=x.createLinearGradient(0,0,W,0); g.addColorStop(0,'#e8186d'); g.addColorStop(1,'#ff6b00'); x.fillStyle=g; x.fillRect(0,0,W,14);
    x.fillStyle='#fff'; x.font='900 44px Arial'; x.fillText(FULL[s]+' · ROUND '+race.rnd,60,100);
    x.font='900 76px Arial'; x.fillText((race.flag&&race.flag.length<6?race.flag+' ':'')+race.name.toUpperCase().slice(0,22),60,190);
    x.fillStyle='#999'; x.font='600 30px Arial'; x.fillText(race.circuit+' · '+dates(race),60,240);
    const top=rows.slice(0,3), hs=[330,250,190], order=[1,0,2], bx=[70,390,710];
    order.forEach((ri,k)=>{const r=top[ri]; if(!r) return; const h=hs[ri], y=620-h+130, col=['#ffd34e','#c9d1d9','#ff9a3d'][ri];
      const cc=conFor(s,r.team), tc=(cc&&cc.color)||'#e8186d';
      x.fillStyle='#16161c'; x.fillRect(bx[k],y,300,h); x.fillStyle=tc; x.fillRect(bx[k],y,300,8);
      x.fillStyle=col; x.font='900 96px Arial'; x.fillText('P'+r.pos,bx[k]+22,y+110);
      x.fillStyle='#fff'; x.font='800 38px Arial'; x.fillText(String(r.name).slice(0,14),bx[k]+22,y-20-(ri===0?0:0));
      x.fillStyle='#888'; x.font='600 22px Arial'; x.fillText(String(r.team||'').slice(0,24),bx[k]+22,y-52);
      x.fillStyle='#fff'; x.font='700 26px Arial'; x.fillText(r.pts+' pts'+(r.pole?' · POLE':'')+(r.fl?' · FL':''),bx[k]+22,y+h-22);});
    x.font='700 30px Arial'; rows.slice(3,10).forEach((r,i)=>{const y=800+i*66; x.fillStyle=i%2?'#111116':'#15151b'; x.fillRect(60,y,960,58);
      x.fillStyle='#e8186d'; x.fillText('P'+r.pos,84,y+40); x.fillStyle='#fff'; x.fillText(String(r.name).slice(0,18),170,y+40);
      x.fillStyle='#888'; x.font='600 24px Arial'; x.fillText(String(r.team||'').slice(0,26),520,y+39); x.fillStyle='#fff'; x.font='800 30px Arial'; x.textAlign='right'; x.fillText(r.pts+'',990,y+40); x.textAlign='left'; x.font='700 30px Arial';});
    x.fillStyle=g; x.fillRect(60,H-110,960,4); x.fillStyle='#fff'; x.font='900 34px Arial'; x.fillText('VMS RACING LEAGUE',60,H-55); x.fillStyle='#888'; x.font='600 24px Arial'; x.fillText('Season 2026',60,H-22);
    c.toBlob(b=>{const a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download='VMS-'+s.toUpperCase()+'-R'+race.rnd+'-podium.png'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),4000);});
    confetti();
  }
  const _rr=renderResults;
  renderResults=function(){ _rr.apply(this,arguments);
    const meta=$('resMeta'); if(!meta||!meta.innerHTML||meta.querySelector('.vx-share')) return;
    const b=document.createElement('button'); b.type='button'; b.className='vx-share'; b.textContent='⬇ Share podium'; b.onclick=podiumCard; meta.appendChild(b); };

  /* ───── 3D tilt + glow on cards ───── */
  const tcss=document.createElement('style'); tcss.textContent='.vx-tilt{transition:transform .15s ease-out,box-shadow .2s;will-change:transform}.vx-tilt:hover{box-shadow:0 14px 40px rgba(232,24,109,.25)}';
  document.head.appendChild(tcss);
  const TS='.champ,.tf-card,.series-card,.round.link,.round.next';
  document.addEventListener('mousemove',e=>{
    const el=e.target.closest&&e.target.closest(TS); if(!el) return;
    const r=el.getBoundingClientRect(), px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
    el.classList.add('vx-tilt'); el.style.transform=`perspective(700px) rotateX(${(-py*9).toFixed(2)}deg) rotateY(${(px*11).toFixed(2)}deg) translateZ(6px)`;
  },{passive:true});
  document.addEventListener('mouseout',e=>{const el=e.target.closest&&e.target.closest(TS); if(el&&!el.contains(e.relatedTarget)) el.style.transform='';});

  renderResults();
})();

/* ═════════ VMS EXTRAS 2: Race Report · Season Story · Race Control ticker · count-up numbers ═════════ */
(function(){
  const $=id=>document.getElementById(id);
  const css=document.createElement('style'); css.textContent=
   '#vx-tick{overflow:hidden;white-space:nowrap;background:#0b0b0f;border-bottom:1px solid #222;font:800 12px Arial,sans-serif;letter-spacing:1px;color:#ddd;padding:7px 0}'+
   '#vx-tick .tk{display:inline-block;padding-left:100%;animation:vxtk 70s linear infinite}#vx-tick:hover .tk{animation-play-state:paused}#vx-tick em{color:#e8186d;font-style:normal;margin:0 14px}@keyframes vxtk{to{transform:translateX(-100%)}}'+
   /* ── Race Report ── */
   '#rr-ov{position:fixed;inset:0;background:radial-gradient(circle at 50% 0,#1c1022,#050508 70%);z-index:99991;display:none;flex-direction:column;align-items:center;color:#fff;font-family:Arial,sans-serif;overflow:auto;padding:28px 4vw 40px;cursor:default}#rr-ov.open{display:flex}'+
   '#rr-ov .x{position:fixed;top:14px;right:22px;font:900 30px Arial;color:#888;cursor:pointer;z-index:2}#rr-ov .x:hover{color:#fff}'+
   '#rr-ov .k{font:800 12px Arial;letter-spacing:4px;color:#e8186d;text-transform:uppercase}#rr-ov h3{font:900 clamp(22px,4.4vw,44px) Arial;letter-spacing:1px;text-transform:uppercase;margin:6px 0 4px;text-align:center}#rr-ov .sb{color:#888;font:700 12px Arial;letter-spacing:2px;text-transform:uppercase;margin-bottom:22px}'+
   '.rr-pod{display:flex;align-items:flex-end;justify-content:center;gap:10px;height:250px;width:min(620px,94vw);margin-bottom:22px}.rr-col{flex:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;min-width:0;height:100%}'+
   '.rr-col .nm{font:900 clamp(13px,2.4vw,18px) Arial;text-align:center;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:0;animation:rrfade .5s ease forwards}.rr-col .tm{font:700 10px Arial;color:#888;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:0;animation:rrfade .5s ease forwards}'+
   '.rr-blk{width:100%;transform-origin:bottom;transform:scaleY(0);animation:rrrise .8s cubic-bezier(.2,.9,.2,1) forwards;display:flex;align-items:flex-start;justify-content:center;font:900 clamp(30px,6vw,52px) Arial;color:rgba(255,255,255,.92);padding-top:8px;border-radius:6px 6px 0 0;position:relative;overflow:hidden}'+
   '.rr-blk:after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.28) 50%,transparent 60%);transform:translateX(-120%);animation:rrshine 1.2s ease 1.3s forwards}'+
   '@keyframes rrrise{to{transform:scaleY(1)}}@keyframes rrfade{to{opacity:1}}@keyframes rrshine{to{transform:translateX(120%)}}'+
   '.rr-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;width:min(760px,94vw);margin-bottom:24px}.rr-chip{background:#101015;border:1px solid #23232c;border-top:2px solid #e8186d;padding:10px 16px;min-width:130px;text-align:center;opacity:0;transform:translateY(10px);animation:rrup .5s ease forwards}'+
   '.rr-chip b{display:block;font:900 20px Arial;margin-bottom:3px}.rr-chip span{font:700 10px Arial;color:#888;letter-spacing:2px;text-transform:uppercase}@keyframes rrup{to{opacity:1;transform:none}}'+
   '.rr-gaps{width:min(760px,94vw)}.rr-gaps h4{font:800 11px Arial;letter-spacing:3px;color:#888;text-transform:uppercase;margin:0 0 10px}.rr-g{display:flex;align-items:center;gap:10px;margin:4px 0}.rr-g .p{width:32px;font:900 12px Arial;color:#ffd34e}.rr-g .n{width:min(120px,26vw);font:700 12px Arial;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'+
   '.rr-g .t{flex:1;height:14px;background:#12121a;position:relative}.rr-g .t i{position:absolute;left:0;top:0;bottom:0;width:0;transition:width 1.1s cubic-bezier(.2,.8,.2,1)}.rr-g .v{width:64px;font:700 11px Arial;color:#aaa;text-align:right}'+
   /* ── Season Story ── */
   '#st-ov{position:fixed;inset:0;z-index:99991;display:none;flex-direction:column;justify-content:center;align-items:center;color:#fff;font-family:Arial,sans-serif;cursor:pointer;user-select:none;overflow:hidden;--tc:#e8186d;background:#050508}#st-ov.open{display:flex}'+
   '#st-ov .bg{position:absolute;inset:-20%;background:radial-gradient(circle at 30% 20%,var(--tc),transparent 45%),radial-gradient(circle at 80% 85%,#1a56c4,transparent 40%);opacity:.38;filter:blur(30px);animation:stbg 12s ease-in-out infinite alternate}'+
   '#st-ov:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(135deg,transparent 0 38px,rgba(255,255,255,.025) 38px 40px);pointer-events:none}'+
   '@keyframes stbg{to{transform:translate(6%,4%) scale(1.15) rotate(8deg)}}'+
   '#st-ov .x{position:absolute;top:26px;right:22px;font:900 30px Arial;color:#888;z-index:3}#st-ov .x:hover{color:#fff}'+
   '#st-ov .bars{position:absolute;top:14px;left:5vw;right:5vw;display:flex;gap:6px;z-index:3}#st-ov .bars i{flex:1;height:4px;background:rgba(255,255,255,.18);overflow:hidden;border-radius:2px}#st-ov .bars i u{display:block;height:100%;width:0;background:#fff;text-decoration:none}#st-ov .bars i.done u{width:100%}#st-ov .bars i.cur u{animation:stfill var(--d,5s) linear forwards}@keyframes stfill{to{width:100%}}'+
   '#st-ov .in{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;padding:0 6vw;text-align:center}'+
   '#st-ov .in>*{opacity:0;animation:stin .7s cubic-bezier(.2,.8,.2,1) forwards}#st-ov .in>:nth-child(2){animation-delay:.15s}#st-ov .in>:nth-child(3){animation-delay:.35s}#st-ov .in>:nth-child(4){animation-delay:.55s}#st-ov .in>:nth-child(5){animation-delay:.75s}'+
   '@keyframes stin{from{opacity:0;transform:translateY(34px) scale(.96)}to{opacity:1;transform:none}}'+
   '#st-ov .k{font:800 clamp(12px,2vmin,16px) Arial;letter-spacing:6px;color:var(--tc);text-transform:uppercase;filter:brightness(1.5)}'+
   '#st-ov .b{font:900 clamp(60px,20vmin,200px)/1 Arial;margin:2vmin 0;letter-spacing:-2px;background:linear-gradient(180deg,#fff 30%,var(--tc));-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:none;max-width:92vw;word-break:break-word}'+
   '#st-ov .b.nm{font-size:clamp(44px,13vmin,130px)}#st-ov .s{font:700 clamp(14px,3vmin,26px) Arial;color:#cfcfd8;max-width:80vw}'+
   '#st-ov .row{display:flex;gap:6vw;align-items:flex-start;justify-content:center;flex-wrap:wrap}#st-ov .row .b{font-size:clamp(54px,16vmin,150px)}#st-ov .row .s{font-size:clamp(11px,2vmin,16px);letter-spacing:3px;text-transform:uppercase;color:#999}'+
   '#st-ov .tr{font-size:clamp(28px,7vmin,60px);letter-spacing:6px;max-width:90vw;margin:2vmin 0}#st-ov .tr span{display:inline-block;animation:sttr .6s cubic-bezier(.3,1.6,.5,1) backwards}@keyframes sttr{from{opacity:0;transform:translateY(-80px) rotate(-30deg)}}'+
   '#st-ov .ch{width:min(760px,90vw);height:auto;margin:3vmin 0}#st-ov .ch path.ln{fill:none;stroke:var(--tc);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:stdraw 2.2s ease .5s forwards;filter:drop-shadow(0 0 8px var(--tc))}@keyframes stdraw{to{stroke-dashoffset:0}}'+
   '#st-ov .ch circle{fill:#fff;opacity:0;animation:stpop .4s ease forwards}#st-ov .ch circle.dn{fill:#ff3b3b}#st-ov .ch text{font:800 13px Arial;fill:#ddd;text-anchor:middle;opacity:0;animation:stpop .4s ease forwards}#st-ov .ch .ax{stroke:rgba(255,255,255,.12);stroke-dasharray:3 6}@keyframes stpop{to{opacity:1}}'+
   '#st-ov .pb{display:inline-block;font:900 clamp(70px,22vmin,220px)/1 Arial;font-style:italic;padding:0 4vmin;border:.6vmin solid var(--tc);transform:skewX(-8deg);box-shadow:0 0 6vmin var(--tc),inset 0 0 4vmin rgba(255,255,255,.08);margin:2vmin 0}'+
   '#st-ov .ar{display:inline-block;font:900 clamp(30px,8vmin,80px)/1.05 Arial;text-transform:uppercase;margin:2vmin 0;padding:1.5vmin 3vmin;background:var(--tc);color:#fff;transform:rotate(-3deg);box-shadow:8px 8px 0 rgba(255,255,255,.9)}'+
   '#st-ov .hint{position:absolute;bottom:18px;left:0;right:0;text-align:center;font:700 11px Arial;letter-spacing:3px;color:#666;text-transform:uppercase;z-index:3;animation:none!important;opacity:1!important}'+
   '@media (prefers-reduced-motion:reduce){#st-ov .bg,#st-ov .in>*,#st-ov .tr span,#st-ov .ch path.ln,#st-ov .ch circle,#st-ov .ch text{animation-duration:.01s!important;animation-delay:0s!important}}';
  document.head.appendChild(css);

  /* ───── Race Control ticker ───── */
  const parts=SERIES.map(s=>{const r=roundsWithResults(s).pop(); if(!r) return ''; const t=D.results[rkey(r,s)].slice(0,3);
    return esc(FULL[s])+' R'+esc(r.rnd)+' '+esc(r.name)+': '+t.map((x,i)=>['🥇','🥈','🥉'][i]+' '+esc(x.name)).join('  ');}).filter(Boolean);
  const nx=nextRace(); if(nx) parts.push('NEXT UP: '+esc(nx.name)+' · '+esc(dates(nx)));
  if(parts.length){ const t=document.createElement('div'); t.id='vx-tick'; t.innerHTML='<div class="tk">'+parts.join('<em>◆</em>')+'</div>'; document.body.insertBefore(t,document.body.firstChild); }

  /* ───── Race Report: results page → 🏆 Race report (animated podium + gap-to-winner) ───── */
  const rr=document.createElement('div'); rr.id='rr-ov'; document.body.appendChild(rr);
  const isDnf=h=>typeof DNFRE!=='undefined'&&DNFRE.test(h.note||'');
  function report(){
    const s=rs.series, race=real.find(r=>r.rnd===rs.rnd), rows=race&&D.results[rkey(race,s)]; if(!rows||!rows.length) return;
    const col=r=>{const cc=conFor(s,r.team); return (cc&&cc.color)||'#e8186d';};
    const by=p=>rows.find(r=>+r.pos===p);
    const pod=[[2,150,.5],[1,230,.15],[3,105,.85]].map(([p,h,d])=>{const r=by(p); if(!r) return '<div class="rr-col"></div>';
      return '<div class="rr-col"><div class="nm" style="animation-delay:'+(d+.5)+'s">'+esc(r.name)+'</div><div class="tm" style="animation-delay:'+(d+.5)+'s">'+esc(r.team||'')+'</div><div class="rr-blk" style="height:'+h+'px;background:linear-gradient(180deg,'+col(r)+',#0c0c10);animation-delay:'+d+'s">'+p+'</div></div>';}).join('');
    const poleR=rows.find(r=>r.pole), flR=rows.find(r=>r.fl), dnfs=rows.filter(isDnf).length, tot=rows.reduce((a,r)=>a+(+r.pts||0),0);
    const p2=by(2), margin=p2&&p2.gap&&p2.gap!=='Leader'?p2.gap.replace(/^\+/,'')+(/^\+?[\d.]+$/.test(p2.gap)?'s':''):'—';
    const chips=[[margin,'Winning margin'],[poleR?poleR.name:'—','Pole position'],[flR?flR.name:'—','Fastest lap'],[rows.length-dnfs+' / '+rows.length,'Classified'],[tot,'Points handed out']].filter(c=>c[0]!=='')
      .map((c,i)=>'<div class="rr-chip" style="animation-delay:'+(1.1+i*.12)+'s"><b>'+esc(c[0])+'</b><span>'+esc(c[1])+'</span></div>').join('');
    const nums=rows.slice(0,10).map(r=>/^\+?\d+(\.\d+)?$/.test(String(r.gap||'').trim())?parseFloat(r.gap):(r.gap==='Leader'?0:null));
    const mx=Math.max(1,...nums.filter(n=>n!=null));
    const gaps=rows.slice(0,10).map((r,i)=>'<div class="rr-g"><span class="p">P'+esc(r.pos)+'</span><span class="n">'+esc(r.name)+'</span><div class="t"><i data-w="'+(nums[i]==null?100:Math.max(3,nums[i]/mx*100))+'" style="background:'+col(r)+(nums[i]==null?';opacity:.35':'')+';transition-delay:'+(1.6+i*.07)+'s"></i></div><span class="v">'+esc(r.gap||'')+'</span></div>').join('');
    rr.innerHTML='<span class="x">×</span><div class="k">'+esc(FULL[s])+' · Round '+esc(race.rnd)+'</div><h3>'+esc(race.flag||'')+' '+esc(race.name)+'</h3><div class="sb">Race report</div><div class="rr-pod">'+pod+'</div><div class="rr-chips">'+chips+'</div><div class="rr-gaps"><h4>Gap to winner</h4>'+gaps+'</div>';
    rr.scrollTop=0; rr.classList.add('open');
    requestAnimationFrame(()=>requestAnimationFrame(()=>rr.querySelectorAll('.rr-g i').forEach(i=>i.style.width=i.dataset.w+'%')));
  }
  rr.addEventListener('mousedown',e=>{ if(e.target.classList.contains('x')) rr.classList.remove('open'); });
  const _rr=renderResults;
  renderResults=function(){ _rr.apply(this,arguments);
    const meta=$('resMeta'); if(!meta||!meta.innerHTML||meta.querySelector('[data-rp]')) return;
    const b=document.createElement('button'); b.type='button'; b.className='vx-share'; b.dataset.rp='1'; b.textContent='🏆 Race report'; b.onclick=report; meta.appendChild(b); };

  /* ───── Season Story: driver profile → 🎬 Season story (auto-playing, tap to skip) ───── */
  const so=document.createElement('div'); so.id='st-ov'; document.body.appendChild(so);
  let slides=[], si=0, stT=null, DUR=5200;
  function countUp(el,n){ const t0=performance.now(); (function f(now){ const p=Math.min(1,(now-t0)/1100); el.textContent=Math.round(n*(1-Math.pow(1-p,3))); if(p<1&&so.classList.contains('open')) requestAnimationFrame(f); })(t0); }
  const stClose=()=>{ clearTimeout(stT); so.classList.remove('open'); };
  function slide(){
    clearTimeout(stT);
    const sl=slides[si];
    so.innerHTML='<div class="bg"></div><span class="x">×</span><div class="bars">'+slides.map((_,i)=>'<i class="'+(i<si?'done':i===si?'cur':'')+'" style="--d:'+DUR+'ms"><u></u></i>').join('')+'</div><div class="in">'+sl+'</div><div class="hint">tap to continue · ← → keys</div>';
    so.querySelectorAll('[data-n]').forEach(el=>countUp(el,+el.dataset.n));
    stT=setTimeout(()=>{ if(si<slides.length-1){ si++; slide(); } else stClose(); },DUR);
  }
  function story(s,name){
    const c=canon(s,name), se=D.standings[s].drivers.find(d=>canon(s,d.name)===c), rows=[];
    real.forEach(r=>{ const l=D.results[rkey(r,s)], h=l&&l.find(x=>canon(s,x.name)===c); if(h) rows.push({r,h}); });
    const dnf=h=>isDnf(h)||!(+h.pos>0), fin=rows.filter(x=>!dnf(x.h)), dns=rows.length-fin.length;
    const best=fin.reduce((a,x)=>(!a||+x.h.pos<+a.h.pos)?x:a,null), wins=fin.filter(x=>+x.h.pos===1).length, pods=fin.filter(x=>+x.h.pos<=3).length;
    const poles=rows.filter(x=>x.h.pole).length, fls=rows.filter(x=>x.h.fl).length;
    const all=D.standings[s].drivers.filter(d=>!d.hidden).sort((a,b)=>b.pts-a.pts), pos=se?all.findIndex(d=>d===se)+1:0;
    const avg=fin.length?fin.reduce((a,x)=>a+ +x.h.pos,0)/fin.length:0;
    const cc=se&&conFor(s,se.team); so.style.setProperty('--tc',(cc&&cc.color)||'#e8186d');
    const ord=n=>n+(['th','st','nd','rd'][(n%100>>3^1&&n%10<4)?n%10:0]||'th');
    /* archetype */
    let arch,why;
    if(wins>=2){arch='The Winner';why='Wins are a habit.';}
    else if(poles>=2){arch='Pole Hunter';why='One lap. Everything. Every time.';}
    else if(pods>=3){arch='Podium Regular';why='Always on the champagne list.';}
    else if(rows.length>=3&&dns>=Math.ceil(rows.length/3)){arch='Chaos Agent';why='Maximum attack. Minimum survival.';}
    else if(fls>=1){arch='Speed Demon';why='Quickest lap on track, at least once.';}
    else if(rows.length>=4&&dns===0){arch='Mr. Consistent';why='Never missed a chequered flag.';}
    else if(wins===1){arch='Race Winner';why='One win is all it takes.';}
    else if(rows.length<=2){arch='Fresh Rookie';why='The story has only just started.';}
    else {arch='The Grinder';why='Showing up and putting in the laps.';}
    /* finish-trace chart */
    let chart='';
    if(rows.length>=2){
      const W=700,H=230,px=50,py=30,maxP=Math.max(10,...fin.map(x=>+x.h.pos)), X=i=>px+(W-2*px)*(rows.length===1?.5:i/(rows.length-1)), Y=p=>py+(H-2*py)*((p-1)/(maxP-1));
      const pts=rows.map((x,i)=>[X(i),dnf(x.h)?H-py+8:Y(+x.h.pos),dnf(x.h)]);
      chart='<svg class="ch" viewBox="0 0 '+W+' '+H+'"><line class="ax" x1="'+px+'" x2="'+(W-px)+'" y1="'+py+'" y2="'+py+'"/><line class="ax" x1="'+px+'" x2="'+(W-px)+'" y1="'+(py+(H-2*py)*(2/(maxP-1)))+'" y2="'+(py+(H-2*py)*(2/(maxP-1)))+'"/>'+
        '<path class="ln" pathLength="1" d="M'+pts.map(p=>p[0].toFixed(1)+','+p[1].toFixed(1)).join(' L')+'"/>'+
        pts.map((p,i)=>'<circle class="'+(p[2]?'dn':'')+'" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="7" style="animation-delay:'+(.5+2.2*i/Math.max(1,pts.length-1))+'s"/><text x="'+p[0].toFixed(1)+'" y="'+(p[1]-14).toFixed(1)+'" style="animation-delay:'+(.6+2.2*i/Math.max(1,pts.length-1))+'s">'+(p[2]?'DNF':'P'+esc(rows[i].h.pos))+'</text>').join('')+'</svg>';
    }
    const nm=se?se.name:name;
    slides=[
      '<div class="k">2026 · '+esc(FULL[s])+' · your season</div><div class="b nm">'+esc(nm)+'</div><div class="s">'+esc(se?se.team:'')+'</div>',
      '<div class="k">you showed up for</div><div class="b" data-n="'+rows.length+'">0</div><div class="s">race'+(rows.length===1?'':'s')+' this season</div>',
      '<div class="k">you banked</div><div class="b" data-n="'+(se?se.pts:0)+'">0</div><div class="s">'+(pos?'points · '+ord(pos)+' of '+all.length+' in the championship':'points')+'</div>'
    ];
    if(chart) slides.push('<div class="k">your season, race by race</div>'+chart+'<div class="s">'+(fin.length?'average finish · P'+avg.toFixed(1):'no classified finishes yet')+'</div>');
    slides.push('<div class="k">best day at the office</div>'+(best?'<div class="pb">P'+esc(best.h.pos)+'</div><div class="s">'+esc(best.r.flag||'')+' '+esc(best.r.name)+'</div>':'<div class="b">—</div><div class="s">no classified finish yet</div>'));
    slides.push('<div class="k">podiums</div>'+(pods?'<div class="tr">'+Array.from({length:Math.min(pods,10)},(_,i)=>'<span style="animation-delay:'+(.3+i*.12)+'s">🏆</span>').join('')+'</div>':'')+'<div class="b" data-n="'+pods+'">0</div><div class="s">'+wins+' win'+(wins===1?'':'s')+(pods?' · champagne optional':' · the first one is coming')+'</div>');
    slides.push('<div class="k">the extras</div><div class="row"><div><div class="b" data-n="'+poles+'">0</div><div class="s">poles</div></div><div><div class="b" data-n="'+fls+'">0</div><div class="s">fastest laps</div></div></div>');
    slides.push('<div class="k">retirements</div><div class="b" data-n="'+dns+'">0</div><div class="s">'+(dns?'DNF'+(dns===1?'':'s')+' · that’s racing':'zero DNFs · clean as it gets')+'</div>');
    slides.push('<div class="k">your racer type</div><div class="ar">'+esc(arch)+'</div><div class="s">'+esc(why)+'</div>');
    slides.push('<div class="k">see you on track</div><div class="b">🏁</div><div class="s">VMS Racing League</div>');
    si=0; so.classList.add('open'); slide();
  }
  so.addEventListener('mousedown',e=>{
    if(e.target.classList.contains('x')){ stClose(); return; }
    const left=e.clientX<innerWidth*.3;
    if(left){ if(si>0){ si--; slide(); } }
    else if(si<slides.length-1){ si++; slide(); } else stClose();
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){ rr.classList.remove('open'); stClose(); }
    if(so.classList.contains('open')){ if(e.key==='ArrowRight'||e.key===' '){ e.preventDefault(); if(si<slides.length-1){si++;slide();} else stClose(); } else if(e.key==='ArrowLeft'&&si>0){ si--; slide(); } }
  });

  /* ───── count-up numbers (hero + driver profile stats) ───── */
  function cu(el){ const t=el.textContent.trim(); if(!/^\d+$/.test(t)) return; const n=+t, pad=t.length, t0=performance.now();
    (function f(now){ const p=Math.min(1,(now-t0)/900); el.textContent=p<1?String(Math.round(n*(1-Math.pow(1-p,3)))).padStart(pad,'0'):t; if(p<1) requestAnimationFrame(f); })(t0); }
  document.querySelectorAll('#heroStats strong').forEach(cu);
  const _od2=openDriver;
  openDriver=function(s,name){ _od2.apply(this,arguments);
    const mb=$('modalBox'); if(!mb) return;
    mb.querySelectorAll('.m-stats strong').forEach(cu);
    const bar=mb.querySelector('.vx-bar')||mb.appendChild(Object.assign(document.createElement('div'),{className:'vx-bar'}));
    const b=document.createElement('button'); b.type='button'; b.className='vx-btn'; b.textContent='🎬 Season story'; b.onclick=()=>{ closeModal(); story(s,name); }; bar.appendChild(b); };
})();

/* ═════════ VMS EXTRAS 3: ⭐ Driver of the Day (Firebase) ═════════
   DOTD: fans vote for the latest race's Driver of the Day, one vote each, live tally.
   Paste your Firebase web config below. Leave apiKey empty = demo mode (vote saved on this device only). */
(function(){
  const FB_CONFIG = {
    apiKey: 'AIzaSyCSfKhopUZwM4rKBq5wtnBU9nyQMVE27_E',
    authDomain: 'vms-dotd.firebaseapp.com',
    projectId: 'vms-dotd',
    appId: '1:94091726900:web:ee3cef2c1d9b56655a3a61'
  };
  const FB_ON=!!FB_CONFIG.apiKey;
  const $=id=>document.getElementById(id);
  const css=document.createElement('style'); css.textContent=
   '#vx-fab{position:fixed;left:14px;bottom:14px;z-index:9000;display:flex;gap:8px;flex-wrap:wrap}#vx-fab button{background:#0b0b0f;border:1px solid #e8186d;color:#fff;padding:10px 14px;font:800 11px Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;cursor:pointer}#vx-fab button:hover{background:#e8186d}'+
   '.vx3{position:fixed;inset:0;z-index:99992;background:rgba(5,5,8,.97);display:none;overflow:auto;padding:30px 4vw 60px;color:#fff;font-family:Arial,sans-serif}.vx3.open{display:block}.vx3 .w{max-width:780px;margin:0 auto}'+
   '.vx3 .x{position:fixed;top:12px;right:22px;font:900 30px Arial;color:#888;cursor:pointer}.vx3 .x:hover{color:#fff}.vx3 .k{font:800 12px Arial;letter-spacing:4px;color:#e8186d;text-transform:uppercase}.vx3 h3{font:900 clamp(24px,5vw,42px) Arial;text-transform:uppercase;margin:6px 0 16px}'+
   '.vx3 .tab{background:transparent;border:1px solid #444;color:#ddd;padding:8px 14px;font:800 11px Arial;letter-spacing:1px;text-transform:uppercase;cursor:pointer;margin:0 6px 8px 0}.vx3 .tab.on{background:#e8186d;border-color:#e8186d;color:#fff}'+
   '.vx3 .ban{margin:10px 0 18px;padding:16px 18px;background:linear-gradient(90deg,#e8186d,#ff6b00);font:900 clamp(15px,3vw,22px) Arial}.vx3 .ban.n{background:#14141b;border:1px solid #2a2a35;font-weight:700;font-size:14px;color:#ccc}'+
   '.vr{display:flex;align-items:center;gap:10px;margin:6px 0;font:700 13px Arial;position:relative}.vr .p{width:34px;color:#ffd34e;font-weight:900}.vr .n{width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr .t{flex:1;height:18px;background:#12121a;position:relative;overflow:hidden}'+
   '.vr .t i{position:absolute;left:0;top:0;bottom:0;background:#e8186d}.vr .t u{position:absolute;top:0;bottom:0;background:repeating-linear-gradient(135deg,#ff6b0066 0 5px,transparent 5px 10px)}.vr .v{width:150px;text-align:right;color:#aaa;font-size:11px}.vr.out{opacity:.4}.vr.out .t i{background:#555}'+
   '.dd-b{display:flex;width:100%;align-items:center;gap:10px;margin:6px 0;padding:0;background:#101015;border:1px solid #23232c;color:#fff;font:700 14px Arial;cursor:pointer;position:relative;overflow:hidden;text-align:left}.dd-b:disabled{cursor:default}.dd-b:not(:disabled):hover{border-color:#e8186d}'+
   '.dd-b i{position:absolute;left:0;top:0;bottom:0;background:#e8186d44;transition:width .6s}.dd-b span{position:relative;padding:13px 14px}.dd-b .c{margin-left:auto;color:#aaa;font-size:12px}.dd-b.me{border-color:#ffd34e}.dd-b.me .n:after{content:" · your vote";color:#ffd34e;font-size:11px}.dd-note{color:#888;font:700 12px Arial;margin:8px 0 14px}';
  document.head.appendChild(css);
  function mk(id,sub,title){ const o=document.createElement('div'); o.className='vx3'; o.id=id;
    o.innerHTML='<span class="x">×</span><div class="w"><div class="k">'+sub+'</div><h3>'+title+'</h3><div id="'+id+'-t"></div><div id="'+id+'-b"></div></div>';
    o.querySelector('.x').onclick=()=>o.classList.remove('open'); document.body.appendChild(o); return o; }
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') document.querySelectorAll('.vx3.open').forEach(o=>o.classList.remove('open')); });
  const fab=document.createElement('div'); fab.id='vx-fab'; document.body.appendChild(fab);
  const add=(txt,fn)=>{ const b=document.createElement('button'); b.type='button'; b.textContent=txt; b.onclick=fn; fab.appendChild(b); };

  /* ───── ⭐ Driver of the Day ───── */
  const dd={s:'f1',rk:null,votes:{},my:null,unsub:null,err:false}, ddO=mk('dd-ov','Fan vote','Driver of the Day');
  let db=null,uid=null,ready=null;
  function fbInit(){ if(ready) return ready;
    ready=(async()=>{ const L=u=>new Promise((ok,no)=>{const e=document.createElement('script'); e.src=u; e.onload=ok; e.onerror=no; document.head.appendChild(e);});
      const v='https://www.gstatic.com/firebasejs/10.14.1/firebase-'; await L(v+'app-compat.js'); await Promise.all([L(v+'auth-compat.js'),L(v+'firestore-compat.js')]);
      firebase.initializeApp(FB_CONFIG); uid=(await firebase.auth().signInAnonymously()).user.uid; db=firebase.firestore(); })();
    return ready; }
  const ddClosed=s=>{ const nx=real.find(r=>(r.series||[]).includes(s)&&!D.results[rkey(r,s)]), t=nx&&raceStart(nx); return !!(t&&Date.now()>=t); };
  function ddPaint(){
    const s=dd.s, r=roundsWithResults(s).pop(), rows=r&&D.results[rkey(r,s)], b=$('dd-ov-b'); if(!b||!rows) return;
    const tot=Object.values(dd.votes).reduce((a,n)=>a+n,0), closed=ddClosed(s), max=Math.max(0,...Object.values(dd.votes));
    const list=[...rows].sort((a,c)=>(dd.votes[c.name]||0)-(dd.votes[a.name]||0)||a.pos-c.pos);
    b.innerHTML='<div class="dd-note">'+esc(r.flag||'')+' '+esc(r.name)+' · '+tot+' vote'+(tot===1?'':'s')+' · '+(closed?'voting closed':dd.my?'thanks for voting':'tap a driver to vote (one vote each)')+(FB_ON?'':' · demo mode: votes stay on this device')+(dd.err?' · could not reach Firebase':'')+'</div>'+
      list.map(x=>{ const n=dd.votes[x.name]||0, pc=tot?Math.round(n/tot*100):0;
        return '<button class="dd-b'+(dd.my===x.name?' me':'')+'" data-n="'+esc(x.name)+'"'+(dd.my||closed?' disabled':'')+'><i style="width:'+pc+'%"></i><span class="n">'+(closed&&n&&n===max?'👑 ':'')+esc(x.name)+'</span><span class="c">P'+esc(x.pos)+' · '+esc(x.team||'')+'</span><span class="c" style="margin-left:0">'+(tot?pc+'%':'')+'</span></button>'; }).join('');
    b.querySelectorAll('.dd-b').forEach(el=>el.onclick=()=>ddVote(el.dataset.n));
  }
  function ddView(){
    tabs($('dd-ov-t'),SERIES.map(s=>[s,FULL[s]]),dd.s,k=>{dd.s=k;dd.rk=null;ddView();});
    const s=dd.s, r=roundsWithResults(s).pop(); if(!r){ $('dd-ov-b').innerHTML='<div class="dd-note">No race finished yet.</div>'; return; }
    const rk=rkey(r,s); if(dd.rk!==rk){ if(dd.unsub){dd.unsub();dd.unsub=null;} dd.rk=rk; dd.votes={}; dd.err=false;
      let mine=null; try{ mine=localStorage.getItem('vx-dotd-'+rk); }catch(e){} dd.my=mine;
      if(FB_ON) fbInit().then(()=>{ dd.unsub=db.collection('dotd_votes').where('rk','==',rk).onSnapshot(sn=>{ const v={}; let me=null; sn.forEach(d=>{ const x=d.data(); v[x.driver]=(v[x.driver]||0)+1; if(x.uid===uid) me=x.driver; }); dd.votes=v; if(me) dd.my=me; ddPaint(); },()=>{dd.err=true; ddPaint();}); }).catch(()=>{dd.err=true; ddPaint();});
      else if(mine) dd.votes[mine]=1; }
    ddPaint();
  }
  async function ddVote(name){
    const rk=dd.rk, r=roundsWithResults(dd.s).pop(); if(!rk||dd.my||ddClosed(dd.s)) return;
    try{ if(FB_ON){ await fbInit(); await db.collection('dotd_votes').doc(rk+'_'+uid).set({rk,s:dd.s,rnd:r.rnd,driver:name,uid,t:firebase.firestore.FieldValue.serverTimestamp()}); }
      else { dd.votes[name]=(dd.votes[name]||0)+1; dd.my=name; ddPaint(); }
      try{ localStorage.setItem('vx-dotd-'+rk,name); }catch(e){}
    }catch(e){ dd.err=true; ddPaint(); }
  }
  add('⭐ Driver of the day',()=>{ ddView(); ddO.classList.add('open'); });
})();

/* ═════════ VMS EXTRAS 4: 📡 Live Timing ═════════
   Shows what race-control.html publishes to your Firebase Realtime Database.
   LIVE_DB = the SAME database URL you typed into race-control.html (URL only, never the secret). */
(function(){
  const LIVE_DB='https://vms-dotd-default-rtdb.europe-west1.firebasedatabase.app';
  const $=id=>document.getElementById(id);
  const css=document.createElement('style'); css.textContent=
   '#lvBanner{display:flex;flex-wrap:wrap;align-items:center;gap:14px;padding:16px 20px;margin-bottom:12px;font:900 clamp(16px,3.2vw,26px) Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;color:#fff}'+
   '.lv-green{background:#0a7d34}.lv-yellow,.lv-vsc{background:#e8c500;color:#000!important}.lv-sc{background:#e8c500;color:#000!important;animation:lvb 1s infinite}.lv-red{background:#c4141c}.lv-none{background:#14141b;color:#999!important}'+
   '.lv-chequered{background:repeating-conic-gradient(#fff 0 25%,#000 0 50%) 0 0/28px 28px;text-shadow:0 0 6px #000,0 0 6px #000}@keyframes lvb{50%{opacity:.55}}'+
   '#lvBanner .lap{margin-left:auto;font-variant-numeric:tabular-nums}#lvBanner small{font:700 11px Arial;letter-spacing:1px;opacity:.8}'+
   '.lv-out{opacity:.45}.lv-ty{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;border:3px solid;font:900 10px Arial}'+
   '.tag.lv-pit{border-color:#4aa8ff;color:#4aa8ff}.tag.lv-pen{border-color:#e5484d;color:#e5484d}.tag.lv-w{border-color:#ffd34e;color:#ffd34e}.lv-best{color:#c98bff}'+
   '.lv-msg{padding:9px 12px;margin:6px 0;background:#101015;border-left:4px solid #e8186d;font:700 13px Arial}.lv-msg b{color:#888;margin-right:10px;font-variant-numeric:tabular-nums}'+
   'header nav a.lv-on::after{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:#e5484d;margin-left:6px;vertical-align:middle;animation:lvb 1s infinite}';
  document.head.appendChild(css);
  const view=document.createElement('div'); view.className='view'; view.id='view-live';
  view.innerHTML='<div class="page-hero"><div class="section-head"><div><div class="title">Live <span class="yellow">Timing</span></div><div class="line"></div></div><span class="sub" id="lvSub">Race control feed</span></div></div>'+
    '<section><div id="lvBanner"></div><div class="meta-row" id="lvMeta"></div><div class="panel scroll" id="lvBoard"></div><div style="margin-top:22px"><div class="sub" style="margin-bottom:8px">Race control messages</div><div id="lvMsgs"></div></div></section>';
  $('view-results').after(view);
  VIEWS.splice(VIEWS.indexOf('results')+1,0,'live');
  const a=document.createElement('a'); a.href='#live'; a.dataset.v='live'; a.textContent='Live';
  document.querySelector('header nav a[data-v="results"]').after(a);

  const FLAG={green:'Green flag',yellow:'Yellow flag',sc:'Safety car',vsc:'Virtual safety car',red:'Red flag',chequered:'Chequered flag'};
  const TY={S:'#ff2b2b',M:'#ffd12e',H:'#fff',I:'#1fd45a',W:'#2f7bff'};
  let data=null, err=false, last=0;
  const arr=x=>Array.isArray(x)?x:(x&&typeof x==='object'?Object.values(x):[]);
  function paint(){
    const s=(data&&data.session)||{}, live=s.status==='live'||s.status==='finished', age=Date.now()-(+s.updated||0), stale=live&&age>120000;
    a.classList.toggle('lv-on',s.status==='live'&&!stale);
    const ban=$('lvBanner'), meta=$('lvMeta'), board=$('lvBoard'), msgs=$('lvMsgs'); if(!ban) return;
    if(!live){
      ban.className='lv-none'; ban.innerHTML=err&&!data?'Can\u2019t reach the live feed':'No live session right now';
      meta.innerHTML=''; msgs.innerHTML='';
      board.innerHTML='<div class="empty">Live timing switches on when race control goes live on race day. Check the <a href="#calendar">calendar</a> for the next session.</div>'; return; }
    const f=s.flag||'none';
    ban.className='lv-'+f; ban.innerHTML='<span>'+esc(stale?'Feed delayed':(FLAG[f]||'Session live'))+'</span>'+(stale?'<small>last update '+Math.round(age/1000)+'s ago</small>':'')+(s.totalLaps||s.lap?'<span class="lap">Lap '+esc(s.lap||0)+(s.totalLaps?' / '+esc(s.totalLaps):'')+'</span>':'');
    meta.innerHTML='<span><b>'+esc(s.name||'')+'</b></span><span>'+esc(s.circuit||'')+'</span><span>'+esc((FULL[s.series]||'')+' · '+(s.type||''))+(s.status==='finished'?' · Finished':'')+'</span>';
    const ds=arr(data.drivers), has=k=>ds.some(r=>r[k]);
    board.innerHTML=ds.length?'<table><thead><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Gap</th>'+(has('int')?'<th>Int</th>':'')+(has('last')?'<th>Last</th>':'')+(has('best')?'<th>Best</th>':'')+(has('tyre')?'<th>Tyre</th>':'')+(has('pits')?'<th>Pits</th>':'')+'</tr></thead><tbody>'+
      ds.map(r=>{ const dnf=/DNF/.test(r.status||''), pos=+r.pos||0;
        return '<tr class="'+(dnf?'lv-out':'')+'"><td class="'+(pos<=3&&!dnf?'pos':'')+'">P'+esc(pos)+'</td><td><b>'+esc(r.name)+'</b>'+(r.fl?'<span class="tag fl">FL</span>':'')+(r.status==='PIT'?'<span class="tag lv-pit">PIT</span>':'')+(r.pen?'<span class="tag lv-pen">'+esc(r.pen)+'</span>':'')+(+r.warns?'<span class="tag lv-w">\u26A0 '+(+r.warns)+'</span>':'')+'</td><td class="muted">'+esc(r.team||'')+'</td><td class="muted">'+(dnf?'DNF':esc(r.gap||''))+'</td>'+
          (has('int')?'<td class="muted">'+(dnf?'':esc(r.int||''))+'</td>':'')+(has('last')?'<td class="muted">'+esc(r.last||'')+'</td>':'')+(has('best')?'<td class="muted'+(r.fl?' lv-best':'')+'">'+esc(r.best||'')+'</td>':'')+
          (has('tyre')?'<td>'+(r.tyre?'<span class="lv-ty" style="border-color:'+(TY[r.tyre]||'#888')+'">'+esc(r.tyre)+'</span>':'')+'</td>':'')+(has('pits')?'<td class="muted">'+esc(r.pits||0)+'</td>':'')+'</tr>'; }).join('')+'</tbody></table>':'<div class="empty">Waiting for the grid\u2026</div>';
    msgs.innerHTML=arr(data.messages).map(m=>'<div class="lv-msg"><b>'+esc(m.t||'')+'</b>'+esc(m.text||'')+'</div>').join('')||'<div class="muted" style="font-size:13px">No messages yet.</div>';
  }
  async function pull(){ last=Date.now(); try{ const r=await fetch(LIVE_DB.replace(/\/+$/,'')+'/live.json',{cache:'no-store'}); if(!r.ok) throw new Error(r.status); data=await r.json(); err=false; }catch(e){ err=true; } paint(); }
  setInterval(()=>{ if(document.hidden) return; if(Date.now()-last>(view.classList.contains('on')?3000:30000)) pull(); },1000);
  pull();
  if(location.hash==='#live') go('live');
})();

/* ═══════════════════════════════════════════════════════════════════════════
   VMS BETS — play-money sportsbook for the VMS F1 / F2 / F3 site
   • Fully separate: own file, own storage, own overlay. app.js is NOT modified.
   • Load it AFTER app.js:   <script src="betting.js"></script>
   • Play money only. Nothing real is ever wagered.
   Markets (next race weekend): Race Winner · Podium · Top 6 · Fastest Lap · Pole
                                Teammate / Top head-to-heads · Total DNFs O/U
   Bets: singles + parlays, American odds, bankroll, daily bonus, rebuy,
         bet history, stats, auto-settlement from the site's real race results.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
if(typeof D==='undefined'||typeof real==='undefined'||typeof nextRace!=='function'||typeof canon!=='function'){
  console.warn('[VMS Bets] load betting.js AFTER app.js'); return;
}

/* ───────── constants / helpers ───────── */
const KEY='vms-bets-v1', START=1000, DAILY=250, REBUY=500, NY='America/New_York', IT=6000;
const DNF_RE=/DNF|DSq|DSQ|DNS|Retired|Mechanical|Not Classified/i;
const SER=['f1','f2','f3'];
const $=id=>document.getElementById(id);
const E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const r2=n=>Math.round(n*100)/100;
const money=n=>(n<0?'-':'')+'$'+Math.abs(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmtAm=a=>a>0?'+'+a:String(a);
const decOf=a=>a>0?1+a/100:1+100/-a;
const amOfDec=d=>d>=2?Math.round((d-1)*100):-Math.round(100/Math.max(.0001,d-1));
function toAm(dec){
  dec=Math.min(101,Math.max(1.05,dec));
  let am=dec>=2?(dec-1)*100:-100/(dec-1);
  const step=Math.abs(am)>=1000?50:5; am=Math.round(am/step)*step;
  if(am>-100&&am<100) am=am<0?-100:100;
  return am;
}
const amFromP=(p,ov)=>toAm(1/(Math.min(.97,Math.max(.004,p))*ov));
const day=()=>new Date().toLocaleDateString('en-CA');
const fdate=t=>new Date(t).toLocaleString(undefined,{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
const FUL=s=>(typeof FULL!=='undefined'&&FULL[s])||('VMS '+s.toUpperCase());

/* ───────── persistent state ───────── */
const blank=()=>({v:1,bal:START,dep:START,bets:[],hist:[{t:Date.now(),b:START}],bonusDay:'',used:[]});
function load(){ try{ const j=JSON.parse(localStorage.getItem(KEY)); if(j&&typeof j.bal==='number') return Object.assign(blank(),j); }catch(e){} return blank(); }
let S=load();
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){} }
function setBal(d){ S.bal=r2(S.bal+d); S.hist.push({t:Date.now(),b:S.bal}); if(S.hist.length>500) S.hist.splice(0,S.hist.length-500); }
const openBets=()=>S.bets.filter(b=>b.status==='open');
/* ───────── redeem codes ─────────
   The codes themselves are NOT in this file — only salted PBKDF2-SHA256 hashes (200k rounds), so reading the
   source doesn't reveal them. Add one from your browser console on the live site:
       await VMSBets.makeCode('your-long-secret-code', 5000, 'Label')
   then paste the printed line into CODES below. Use long random codes: a short/guessable one could be brute-forced from its hash. */
const SALT='vms-bets|b86be8e4a7b2e077ad6c715e', ITER=200000;
const CODES=[
  {h:'aaec2a6badd9b44a561e34b87a59df716828e90e57a216976bd017fe35a8f2b0',amt:50000000000,label:'Owner bankroll'},
  {h:'5eb1fc2fb51efc0afaa09221482be1d51632f698e2a96d0c11b9f56cd61c965d',amt:10000,label:'Launch code'}
];

/* ───────── race clock (league times are US Eastern) ───────── */
function nyToUtc(y,mo,d,h,mi){
  for(const off of [4,5]){
    const t=Date.UTC(y,mo,d,h+off,mi||0);
    const p=new Intl.DateTimeFormat('en-US',{timeZone:NY,hour:'numeric',hour12:false,day:'numeric'}).formatToParts(new Date(t));
    const hh=+p.find(x=>x.type==='hour').value%24, dd=+p.find(x=>x.type==='day').value;
    if(hh===h&&dd===d) return t;
  }
  return Date.UTC(y,mo,d,h+5,mi||0);
}
function closeAt(s,race){
  const sd=D.sessions&&D.sessions[s]; if(!sd) return Infinity;
  const m=String(sd.time).match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i); if(!m) return Infinity;
  let h=+m[1]%12; if(/pm/i.test(m[3])) h+=12;
  const ds=/sun/i.test(sd.day)?(race.sunDate||race.satDate):race.satDate;
  const p=String(ds||'').trim().split(' '), mo=MON[p[0]], d=parseInt(p[1]);
  if(mo===undefined||isNaN(d)) return Infinity;
  return nyToUtc(2026,mo,d,h,+m[2]);
}
function raceFor(s){ const r=nextRace(); return r&&(r.series||[]).includes(s)?r:null; }

/* ───────── odds model ───────── */
function rng(seed){ let a=seed>>>0; return ()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function hash(str){ let h=2166136261; for(let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
const gum=r=>-Math.log(-Math.log(Math.min(1-1e-12,Math.max(1e-12,r()))));

const TAB=[40,22,14,9,6,4,2.5,1.5,.8,.4];   /* steeper than league points: winning should count far more than a P2 */
const tkey=t=>typeof normTeam==='function'?normTeam(t):String(t||'').toLowerCase().trim();
/* who is on the grid: published lineup + anyone who actually raced recently (so e.g. Juantoes is never missing) */
function pool(s){
  const seen=new Set(), out=[], sd=D.standings[s].drivers;
  const add=(name,team)=>{ if(!name||name==='—') return; const c=canon(s,name); if(seen.has(c)) return; seen.add(c); out.push({name,c,team:team||''}); };
  (D.info[s]||[]).forEach(t=>(t.drivers||[]).forEach(dr=>add(dr&&dr.name,t.name)));
  const cnt={}, info={};
  roundsWithResults(s).slice(-3).forEach(r=>(D.results[rkey(r,s)]||[]).forEach(x=>{ const c=canon(s,x.name); cnt[c]=(cnt[c]||0)+1; info[c]={name:x.name,team:x.team}; }));
  Object.keys(cnt).forEach(c=>{
    if(seen.has(c)) return;
    const se=sd.find(d=>canon(s,d.name)===c);
    if(cnt[c]>=2||(se&&+se.pts>=10)) add(info[c].name,(se&&se.team)||info[c].team);
  });
  if(out.length<6){
    sd.filter(d=>!d.hidden&&d.name&&d.name!=='—').slice().sort((a,b)=>b.pts-a.pts).slice(0,16).forEach(d=>add(d.name,d.team));
  }
  return out;
}
/* form model: finishing positions (not raw points), recent races weighted heavier, shrunk toward average when a driver has few starts */
function dStats(s,c){
  const rounds=roundsWithResults(s), N=rounds.length;
  let w=0,sum=0,tot=0,n=0,dnfs=0,poles=0,fls=0;
  rounds.forEach((r,i)=>{
    const row=(D.results[rkey(r,s)]||[]).find(x=>canon(s,x.name)===c); if(!row) return;
    n++; const dnf=DNF_RE.test(row.note||''); if(dnf) dnfs++;
    const p=!dnf&&+row.pos>0?+row.pos:0, fp=p&&p<=10?TAB[p-1]:0, wt=Math.pow(.86,N-1-i);
    w+=wt; sum+=wt*fp; tot+=fp; if(row.pole) poles++; if(row.fl) fls++;
  });
  const perf=n?.6*(sum/w)+.4*(tot/n):0;
  return {n,w,perf,base:(w*perf+1.5*2.5)/(w+1.5)+.8,dnfp:Math.min(.45,(dnfs+.6)/(n+4)),polr:poles/(n+2),flr:fls/(n+2)};
}

const LEGS={}, memo={};
function board(s,race){
  const rk=rkey(race,s), key=rk+':'+roundsWithResults(s).length;
  if(memo[rk]&&memo[rk].key===key) return memo[rk];
  const drv=pool(s); drv.forEach(d=>Object.assign(d,dStats(s,d.c),{tk:tkey(d.team)}));
  const tp={}; drv.forEach(d=>{ if(d.n){ const o=tp[d.tk]=tp[d.tk]||{a:0,k:0}; o.a+=d.perf; o.k++; } });
  drv.forEach(d=>{ const o=tp[d.tk], team=o?o.a/o.k:5; d.rating=Math.max(.8,.9*d.base+.1*team); d.lw=2.0*Math.log(d.rating);
    d.lwf=.8*d.lw+Math.log(1+4*d.flr); d.lwp=1.1*d.lw+Math.log(1+4*d.polr); });
  const N=drv.length, B={key,rk,s,race,drv,markets:[]};
  memo[rk]=B; if(N<4) return B;

  const byR=drv.map((d,i)=>i).sort((a,b)=>drv[b].lw-drv[a].lw);
  /* head-to-head pairs: teammates + top-rated matchups */
  const pairs=[], used=new Set(), pk=(a,b)=>a<b?a+'_'+b:b+'_'+a;
  const teams={}; byR.forEach(i=>{ (teams[drv[i].tk]=teams[drv[i].tk]||[]).push(i); });
  Object.keys(teams).filter(t=>t&&teams[t].length>=2).map(t=>teams[t]).sort((x,y)=>(drv[y[0]].lw+drv[y[1]].lw)-(drv[x[0]].lw+drv[x[1]].lw)).slice(0,8)
    .forEach(t=>{ pairs.push({a:t[0],b:t[1],kind:'team'}); used.add(pk(t[0],t[1])); });
  for(let k=0;k+1<byR.length&&pairs.filter(p=>p.kind==='top').length<6;k+=2){
    const a=byR[k], b=byR[k+1]; if(used.has(pk(a,b))) continue; pairs.push({a,b,kind:'top'}); used.add(pk(a,b));
  }
  /* Monte-Carlo (seeded so the lines don't jump around on refresh) */
  const R=rng(hash(rk+'|'+N)), win=new Float64Array(N), pod=new Float64Array(N), t6=new Float64Array(N), fl=new Float64Array(N), pole=new Float64Array(N);
  const wa=new Float64Array(pairs.length), wb=new Float64Array(pairs.length), dc=new Array(N+1).fill(0);
  const sc=new Float64Array(N), dn=new Array(N), idx=drv.map((d,i)=>i);
  for(let it=0;it<IT;it++){
    let nd=0;
    for(let i=0;i<N;i++){ dn[i]=R()<drv[i].dnfp; if(dn[i]){ nd++; sc[i]=-1e9+R(); } else sc[i]=drv[i].lw+gum(R); }
    dc[nd]++;
    const ord=idx.slice().sort((a,b)=>sc[b]-sc[a]);
    for(let k=0;k<6;k++){ const i=ord[k]; if(dn[i]) break; if(k===0) win[i]++; if(k<3) pod[i]++; t6[i]++; }
    let bf=-1,bfv=-1e9,bp=-1,bpv=-1e9;
    for(let i=0;i<N;i++){
      if(!dn[i]){ const v=drv[i].lwf+gum(R); if(v>bfv){ bfv=v; bf=i; } }
      const q=drv[i].lwp+gum(R); if(q>bpv){ bpv=q; bp=i; }
    }
    if(bf>=0) fl[bf]++; pole[bp]++;
    for(let k=0;k<pairs.length;k++){
      const a=pairs[k].a, b=pairs[k].b;
      if(dn[a]&&dn[b]) continue;
      if(dn[b]||(!dn[a]&&sc[a]>sc[b])) wa[k]++; else wb[k]++;
    }
  }
  const L=(kind,mid,title,oid,label,sub,am,x)=>{
    const l=Object.assign({id:rk+'|'+mid+'|'+oid,mk:kind,mid,mkTitle:title,s,rk,rnd:race.rnd,raceName:race.name,label,sub,am,dec:decOf(am),st:'open'},x);
    LEGS[l.id]=l; return l;
  };
  const P=(arr,i)=>Math.max(.003,arr[i]/IT);
  const lm=(kind,title,note,arr,ov)=>({id:kind,title,note,type:'list',
    outs:byR.map(i=>L(kind,kind,title,String(i),drv[i].name,drv[i].team,amFromP(P(arr,i),ov),{pick:drv[i].c,drivers:[drv[i].c]}))});
  B.markets.push(lm('winner','Race Winner','Who takes P1',win,1.15));
  B.markets.push(lm('podium','Podium Finish','Top 3 · classified',pod,1.10));
  B.markets.push(lm('top6','Top 6 Finish','Top 6 · classified',t6,1.08));
  B.markets.push(lm('fl','Fastest Lap','Needs the fastest-lap flag in results · else void',fl,1.18));
  B.markets.push(lm('pole','Pole Position','Needs the pole flag in results · else void',pole,1.18));
  const pm=(kind,title,note,ids)=>{
    if(!ids.length) return;
    B.markets.push({id:kind,title,note,type:'pairs',rows:ids.map(k=>{
      const p=pairs[k], pa=wa[k]/Math.max(1,wa[k]+wb[k]), ov=1.048, mid='h2h'+k;
      const A=drv[p.a], Bd=drv[p.b], ds=[A.c,Bd.c];
      return {title:A.name+' vs '+Bd.name,outs:[
        L('h2h',mid,'Head-to-Head',A.c,A.name,'vs '+Bd.name,amFromP(pa,ov),{pick:A.c,opp:Bd.c,drivers:ds}),
        L('h2h',mid,'Head-to-Head',Bd.c,Bd.name,'vs '+A.name,amFromP(1-pa,ov),{pick:Bd.c,opp:A.c,drivers:ds})]};
    })});
  };
  pm('team','Teammate Battles','Higher classified finish wins · DNF loses to a finisher · both out = void',pairs.map((p,k)=>p.kind==='team'?k:-1).filter(k=>k>=0));
  pm('top','Top Driver Matchups','Same rules as teammate battles',pairs.map((p,k)=>p.kind==='top'?k:-1).filter(k=>k>=0));
  if(N>=8){
    let cum=0,m=0; for(m=0;m<=N;m++){ cum+=dc[m]; if(cum/IT>=.5) break; }
    const line=m+.5, pu=cum/IT;
    B.markets.push({id:'dnf',title:'Total DNFs',note:'Counts DNF / DNS / DSQ rows in the results',type:'pairs',rows:[{title:'Retirements in the race',outs:[
      L('dnf','dnf','Total DNFs','o','Over '+line,'',amFromP(1-pu,1.048),{side:'over',line,drivers:[]}),
      L('dnf','dnf','Total DNFs','u','Under '+line,'',amFromP(pu,1.048),{side:'under',line,drivers:[]})]}]});
  }
  return B;
}

/* practice results (random, from the same model) */
const gm=()=>gum(Math.random);
function simRows(B){
  const sc=B.drv.map(d=>{ const dn=Math.random()<d.dnfp; return {d,dn,s:dn?-1e9+Math.random():d.lw+gm()}; }).sort((x,y)=>y.s-x.s);
  let fl=null,flv=-1e9,po=null,pov=-1e9;
  sc.forEach(x=>{ if(!x.dn){ const v=x.d.lwf+gm(); if(v>flv){ flv=v; fl=x; } } const q=x.d.lwp+gm(); if(q>pov){ pov=q; po=x; } });
  return sc.map((x,i)=>({pos:i+1,name:x.d.name,team:x.d.team,pts:0,fl:x===fl,pole:x===po,note:x.dn?'DNF':''}));
}

/* ───────── settlement ───────── */
function legOutcome(l,rows){
  const m={}; rows.forEach(r=>{ const c=canon(l.s,r.name); if(!m[c]) m[c]=r; });
  const cl=r=>r&&!DNF_RE.test(r.note||'')&&+r.pos>0?+r.pos:null;
  const me=m[l.pick];
  switch(l.mk){
    case 'winner': return !me?'void':(cl(me)===1?'won':'lost');
    case 'podium': return !me?'void':(cl(me)&&cl(me)<=3?'won':'lost');
    case 'top6':   return !me?'void':(cl(me)&&cl(me)<=6?'won':'lost');
    case 'fl':     return (!me||!rows.some(x=>x.fl))?'void':(me.fl?'won':'lost');
    case 'pole':   return (!me||!rows.some(x=>x.pole))?'void':(me.pole?'won':'lost');
    case 'h2h': {
      const op=m[l.opp]; if(!me||!op) return 'void';
      const a=cl(me), b=cl(op); if(!a&&!b) return 'void'; if(a&&b&&a===b) return 'void';
      return (a&&(!b||a<b))?'won':'lost';
    }
    case 'dnf': { const n=rows.filter(x=>DNF_RE.test(x.note||'')).length; return (l.side==='over'?n>l.line:n<l.line)?'won':'lost'; }
  }
  return 'void';
}
function resolve(b,out){
  if(b.status!=='open') return false;
  const lost=b.legs.some(l=>l.st==='lost');
  if(!lost&&b.legs.some(l=>l.st==='open')) return false;
  const live=b.legs.filter(l=>l.st==='won');
  if(lost){ b.status='lost'; b.payout=0; }
  else if(!live.length){ b.status='void'; b.payout=b.stake; setBal(b.stake); }
  else { b.dec=live.reduce((a,l)=>a*l.dec,1); b.payout=r2(b.stake*b.dec); b.status='won'; setBal(b.payout); }
  b.settledAt=Date.now(); out.push(b); return true;
}
function settle(src){ /* src(rk) -> rows|null ; default = real results from the site */
  const done=[];
  S.bets.forEach(b=>{
    if(b.status!=='open') return;
    b.legs.forEach(l=>{
      if(l.st!=='open') return;
      const rows=src?src(l.rk):(D.results[l.rk]&&D.results[l.rk].length?D.results[l.rk]:null);
      if(rows){ l.st=legOutcome(l,rows); l.src=src?'sim':'result'; }
    });
    resolve(b,done);
  });
  if(done.length){
    save(); const w=done.filter(b=>b.status==='won');
    toast(done.length+' bet'+(done.length>1?'s':'')+' settled'+(w.length?' · '+w.length+' won '+money(w.reduce((a,b)=>a+b.payout-b.stake,0)):'')); refresh();
  }
  return done.length;
}

/* ───────── UI state ───────── */
const ui={tab:'markets',s:'f1',mode:'singles'};
const slip={legs:[],stakes:{},p:''};

const css=document.createElement('style'); css.id='vb-css'; css.textContent=
'#vb-fab{position:fixed;right:14px;bottom:14px;z-index:9000;background:linear-gradient(90deg,#e8186d,#ff6b00);color:#fff;border:0;padding:12px 16px;font:900 12px Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;cursor:pointer;box-shadow:0 6px 24px rgba(232,24,109,.35)}#vb-fab:hover{filter:brightness(1.1)}'+
'#vb-fab i{font-style:normal;background:#fff;color:#e8186d;border-radius:10px;padding:1px 7px;margin-left:8px}'+
'#vb-ov{position:fixed;inset:0;z-index:99995;background:#07070a;color:#fff;font-family:Arial,sans-serif;display:none;flex-direction:column}#vb-ov.open{display:flex}#vb-ov *{box-sizing:border-box}'+
'.vb-head{display:flex;align-items:center;gap:10px 14px;flex-wrap:wrap;padding:12px 18px;border-bottom:1px solid #23232c;background:#0b0b0f}'+
'.vb-logo{font:900 18px Arial;letter-spacing:2px}.vb-logo span{color:#e8186d}.vb-logo small{display:block;font:700 9px Arial;letter-spacing:2px;color:#777;margin-top:2px}'+
'.vb-bal{margin-left:auto;text-align:right}.vb-bal b{display:block;font:900 22px Arial;color:#4ade80;font-variant-numeric:tabular-nums}.vb-bal small{font:700 10px Arial;color:#888;letter-spacing:1px;text-transform:uppercase}'+
'.vb-btn{background:transparent;border:1px solid #444;color:#ddd;padding:8px 12px;font:800 11px Arial;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.vb-btn:hover:not(:disabled){border-color:#e8186d;color:#fff}.vb-btn:disabled{opacity:.4;cursor:default}'+
'.vb-btn.hot{background:linear-gradient(90deg,#e8186d,#ff6b00);border-color:transparent;color:#fff}.vb-x{font:900 28px Arial;color:#888;background:none;border:0;cursor:pointer;padding:0 4px}.vb-x:hover{color:#fff}'+
'.vb-body{flex:1;display:grid;grid-template-columns:minmax(0,1fr) 350px;min-height:0}.vb-main{overflow:auto;padding:18px 22px 100px}'+
'.vb-slip{border-left:1px solid #23232c;overflow:auto;background:#0b0b0f;padding:0 16px 18px}'+
'.vb-tabs{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 14px}.vb-tabs button{background:transparent;border:1px solid #333;color:#bbb;padding:8px 14px;font:800 11px Arial;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.vb-tabs button.on{background:#e8186d;border-color:#e8186d;color:#fff}.vb-tabs.sm button{padding:6px 11px;font-size:10px}'+
'.vb-race{display:flex;flex-wrap:wrap;align-items:center;gap:6px 16px;background:#101015;border:1px solid #23232c;border-left:4px solid #e8186d;padding:12px 16px;margin-bottom:14px}.vb-race b{font:900 16px Arial}.vb-race span{font:700 12px Arial;color:#999}.vb-race .cd{margin-left:auto;color:#ffd34e;font-weight:900}.vb-race .cd.closed{color:#ef4444}'+
'.vb-mk{background:#0e0e13;border:1px solid #1e1e27;margin-bottom:10px}.vb-mk summary{cursor:pointer;padding:12px 14px;font:900 13px Arial;letter-spacing:1px;text-transform:uppercase;list-style:none;display:flex;gap:10px;align-items:baseline}.vb-mk summary::-webkit-details-marker{display:none}.vb-mk summary:before{content:"▸";color:#e8186d}.vb-mk[open] summary:before{content:"▾"}.vb-mk summary small{font:600 11px Arial;color:#777;text-transform:none;letter-spacing:0}'+
'.vb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px;padding:4px 14px 14px}.vb-prow{padding:0 14px 12px}.vb-prow h5{margin:0 0 6px;font:700 12px Arial;color:#aaa}.vb-prow .vb-grid{padding:0;grid-template-columns:1fr 1fr}'+
'.vb-sel{display:flex;justify-content:space-between;align-items:center;gap:8px;background:#15151c;border:1px solid #262630;color:#fff;padding:10px 12px;cursor:pointer;font:700 13px Arial;text-align:left}.vb-sel:hover:not(:disabled){border-color:#e8186d}.vb-sel:disabled{opacity:.45;cursor:not-allowed}'+
'.vb-sel .n{min-width:0}.vb-sel .n b{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vb-sel .n small{display:block;font:600 10px Arial;color:#777;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px}.vb-sel .o{font:900 14px Arial;color:#ffd34e;font-variant-numeric:tabular-nums}.vb-sel.on{background:#e8186d;border-color:#e8186d}.vb-sel.on .o,.vb-sel.on .n small{color:#fff}'+
'.vb-empty{color:#888;font:700 13px Arial;padding:26px 6px;text-align:center;line-height:1.5}'+
'.vb-sliphd{display:flex;align-items:center;gap:10px;padding:14px 0;font:900 14px Arial;letter-spacing:1px;text-transform:uppercase;position:sticky;top:0;background:#0b0b0f;z-index:2;cursor:pointer}.vb-sliphd .cnt{background:#e8186d;border-radius:10px;padding:1px 9px;font-size:12px}'+
'.vb-leg{position:relative;background:#14141b;border:1px solid #23232c;padding:10px 30px 10px 12px;margin-bottom:8px}.vb-leg .t{font:800 13px Arial;display:flex;justify-content:space-between;gap:8px}.vb-leg .t i{font-style:normal;color:#ffd34e}.vb-leg small{display:block;color:#777;font:600 11px Arial;margin-top:3px}.vb-leg .rm{position:absolute;top:4px;right:6px;background:none;border:0;color:#777;font:900 18px Arial;cursor:pointer}.vb-leg .rm:hover{color:#fff}'+
'.vb-in{width:100%;margin-top:8px;background:#0b0b0f;border:1px solid #333;color:#fff;padding:9px 10px;font:800 14px Arial;outline:0}.vb-in:focus{border-color:#e8186d}'+
'.vb-chips{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0}.vb-chips button{background:#14141b;border:1px solid #2c2c36;color:#ccc;padding:6px 10px;font:800 11px Arial;cursor:pointer}.vb-chips button:hover{border-color:#e8186d;color:#fff}'+
'.vb-sum{border-top:1px solid #23232c;margin-top:10px;padding-top:10px;font:700 13px Arial;color:#bbb}.vb-sum div{display:flex;justify-content:space-between;margin:5px 0}.vb-sum b{color:#fff;font-variant-numeric:tabular-nums}.vb-sum .g{color:#4ade80}'+
'.vb-warn{background:#3a1d0d;border-left:3px solid #ff6b00;padding:8px 10px;margin:8px 0;font:700 12px Arial;color:#ffb27a}'+
'.vb-place{width:100%;margin-top:12px;padding:14px;background:linear-gradient(90deg,#e8186d,#ff6b00);color:#fff;border:0;font:900 13px Arial;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer}.vb-place:hover{filter:brightness(1.1)}'+
'.vb-bet{background:#101015;border:1px solid #23232c;border-left:4px solid #ffd34e;margin-bottom:10px;padding:12px 14px}.vb-bet.won{border-left-color:#22c55e}.vb-bet.lost{border-left-color:#ef4444}.vb-bet.void{border-left-color:#777}'+
'.vb-bet .h{display:flex;flex-wrap:wrap;justify-content:space-between;gap:6px 14px;margin-bottom:8px}.vb-bet .h b{font:900 13px Arial;text-transform:uppercase;letter-spacing:.5px}.vb-bet .h span{font:700 12px Arial;color:#999}'+
'.vb-pill{font:900 10px Arial;letter-spacing:1px;padding:3px 8px;text-transform:uppercase;background:#333;color:#ddd;margin-left:8px}.vb-pill.won{background:#166534;color:#bbf7d0}.vb-pill.lost{background:#7f1d1d;color:#fecaca}.vb-pill.open{background:#5c4a00;color:#ffd34e}'+
'.vb-lg{display:flex;gap:8px;font:700 12px Arial;color:#ccc;margin:4px 0}.vb-lg .ic{width:16px;text-align:center;font-weight:900}.vb-lg.won .ic{color:#22c55e}.vb-lg.lost .ic{color:#ef4444}.vb-lg.open .ic{color:#ffd34e}.vb-lg.void .ic{color:#888}.vb-lg small{display:block;color:#777;font-weight:600;font-size:11px}'+
'.vb-sim{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;background:#101015;border:1px dashed #444;padding:10px 14px;margin-bottom:8px;font:700 12px Arial;color:#bbb}.vb-sim .btn{margin-left:auto}'+
'.vb-stats{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin-bottom:18px}.vb-stat{background:#101015;border:1px solid #23232c;padding:14px}.vb-stat b{display:block;font:900 22px Arial;font-variant-numeric:tabular-nums}.vb-stat span{font:700 10px Arial;color:#888;letter-spacing:1.5px;text-transform:uppercase}'+
'.vb-ch{background:#101015;border:1px solid #23232c;padding:12px}.vb-ch svg{width:100%;height:auto;display:block}.vb-ch h4{margin:0 0 6px;font:800 11px Arial;letter-spacing:2px;color:#888;text-transform:uppercase}'+
'.vb-code{max-width:520px}.vb-code h3{margin:0 0 6px;font:900 18px Arial;text-transform:uppercase;letter-spacing:1px}.vb-code p{color:#999;font:600 13px Arial;line-height:1.5;margin:0 0 14px}.vb-cr{display:flex;gap:8px}.vb-cr .vb-in{margin:0;text-transform:uppercase;letter-spacing:2px}.vb-cm{min-height:20px;margin-top:10px;font:800 13px Arial}.vb-cm.ok{color:#4ade80}.vb-cm.bad{color:#ef4444}'+
'.vb-note{color:#666;font:600 11px Arial;margin-top:18px;line-height:1.5}'+
'#vb-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:99999;background:#14141b;border:1px solid #e8186d;color:#fff;padding:11px 18px;font:800 12px Arial;letter-spacing:.5px;display:none;max-width:90vw;text-align:center}'+
'@media(max-width:900px){.vb-body{grid-template-columns:1fr}.vb-slip{position:fixed;left:0;right:0;bottom:0;max-height:72vh;border-left:0;border-top:2px solid #e8186d;transform:translateY(calc(100% - 52px));transition:transform .25s;z-index:3}.vb-slip.open{transform:none}.vb-main{padding:14px 12px 90px}.vb-grid{grid-template-columns:1fr 1fr}.vb-bal{margin-left:0}}'+
'@media(max-width:520px){.vb-grid{grid-template-columns:1fr}}';
document.head.appendChild(css);

const fab=document.createElement('button'); fab.id='vb-fab'; fab.type='button'; document.body.appendChild(fab);
const ov=document.createElement('div'); ov.id='vb-ov';
ov.innerHTML='<div class="vb-head" id="vb-hd"></div><div class="vb-body"><div class="vb-main" id="vb-main"></div><aside class="vb-slip" id="vb-slip"></aside></div>';
document.body.appendChild(ov);
const tst=document.createElement('div'); tst.id='vb-toast'; document.body.appendChild(tst);
let tT=0; function toast(m){ tst.textContent=m; tst.style.display='block'; clearTimeout(tT); tT=setTimeout(()=>tst.style.display='none',3600); }

/* ───────── renderers ───────── */
function renderHead(){
  const claimed=S.bonusDay===day(), broke=S.bal<5&&!openBets().length;
  $('vb-hd').innerHTML='<div class="vb-logo">VMS <span>BETS</span><small>PLAY MONEY · NO REAL STAKES</small></div>'+
    '<button class="vb-btn'+(claimed?'':' hot')+'" data-act="daily"'+(claimed?' disabled':'')+'>🎁 '+(claimed?'Bonus claimed today':'Daily bonus +'+money(DAILY).replace('.00',''))+'</button>'+
    (broke?'<button class="vb-btn hot" data-act="rebuy">♻ Rebuy '+money(REBUY).replace('.00','')+'</button>':'')+
    '<button class="vb-btn" data-act="reset">Reset</button>'+
    '<div class="vb-bal"><small>Bankroll</small><b>'+money(S.bal)+'</b></div><button class="vb-x" data-act="close" aria-label="Close">×</button>';
}
function renderFab(){
  const n=openBets().length;
  fab.innerHTML='💰 Bets · '+money(S.bal).replace(/\.00$/,'')+(n?'<i>'+n+'</i>':'');
}
function tabsH(items,active,attr,cls){
  return '<div class="vb-tabs'+(cls?' '+cls:'')+'">'+items.map(([k,l])=>'<button class="'+(k===active?'on':'')+'" data-'+attr+'="'+k+'">'+E(l)+'</button>').join('')+'</div>';
}
function selBtn(l,closed){
  return '<button class="vb-sel" data-lid="'+E(l.id)+'"'+(closed?' disabled':'')+'><span class="n"><b>'+E(l.label)+'</b>'+(l.sub?'<small>'+E(l.sub)+'</small>':'')+'</span><span class="o">'+fmtAm(l.am)+'</span></button>';
}
function renderMain(){
  const m=$('vb-main');
  let h=tabsH([['markets','Markets'],['bets','My Bets'+(openBets().length?' ('+openBets().length+')':'')],['stats','Stats'],['codes','Codes']],ui.tab,'tab');
  if(ui.tab==='markets') h+=marketsH();
  else if(ui.tab==='bets') h+=betsH();
  else if(ui.tab==='codes') h+=codesH();
  else h+=statsH();
  m.innerHTML=h; syncSel(); tick();
}
function marketsH(){
  let h=tabsH(SER.map(s=>[s,FUL(s)]),ui.s,'ser','sm');
  const race=raceFor(ui.s);
  if(!race) return h+'<div class="vb-empty">No upcoming race on the calendar for '+E(FUL(ui.s))+'.</div>';
  if(D.results[rkey(race,ui.s)]) return h+'<div class="vb-empty">Results for '+E(race.name)+' are in — open bets settle automatically.<br>New markets appear when the next round is up.</div>';
  const B=board(ui.s,race), close=closeAt(ui.s,race), closed=Date.now()>=close;
  h+='<div class="vb-race"><b>'+E(race.flag||'')+' '+E(race.name)+'</b><span>Round '+E(race.rnd)+' · '+E(race.circuit)+'</span><span class="cd'+(closed?' closed':'')+'" id="vb-cd" data-c="'+(isFinite(close)?close:0)+'"></span></div>';
  if(!B.markets.length) return h+'<div class="vb-empty">Lineup for '+E(FUL(ui.s))+' isn\'t published yet — no markets.</div>';
  B.markets.forEach((mk,i)=>{
    h+='<details class="vb-mk"'+(i===0?' open':'')+'><summary>'+E(mk.title)+'<small>'+E(mk.note||'')+'</small></summary>';
    if(mk.type==='list') h+='<div class="vb-grid">'+mk.outs.map(l=>selBtn(l,closed)).join('')+'</div>';
    else h+=mk.rows.map(r=>'<div class="vb-prow"><h5>'+E(r.title)+'</h5><div class="vb-grid">'+r.outs.map(l=>selBtn(l,closed)).join('')+'</div></div>').join('');
    h+='</details>';
  });
  return h+'<div class="vb-note">Odds are generated from the live standings, recent form and DNF history. Bets settle against the results posted on this site. A driver who doesn\'t start, or a market missing its flag (pole / fastest lap), is void and refunded.</div>';
}
const IC={won:'✓',lost:'✗',open:'●',void:'↺'};
function betCard(b){
  const t=b.type==='parlay'?b.legs.length+'-Leg Parlay':'Single';
  const stl={open:'Open',won:'Won',lost:'Lost',void:'Refunded'}[b.status];
  const ret=b.status==='open'?'To win '+money(r2(b.stake*(b.dec-1))):(b.status==='won'?'Paid '+money(b.payout):(b.status==='void'?'Refunded '+money(b.stake):''));
  return '<div class="vb-bet '+b.status+'"><div class="h"><b>'+t+' · '+fmtAm(b.type==='parlay'?amOfDec(b.dec):b.legs[0].am)+'<span class="vb-pill '+b.status+'">'+stl+'</span></b>'+
    '<span>Stake '+money(b.stake)+(ret?' · '+ret:'')+' · '+fdate(b.ts)+'</span></div>'+
    b.legs.map(l=>'<div class="vb-lg '+l.st+'"><span class="ic">'+IC[l.st]+'</span><span><b>'+E(l.label)+'</b> '+(l.mk==='h2h'?E(l.sub):'')+' <i style="font-style:normal;color:#ffd34e">'+fmtAm(l.am)+'</i>'+
      '<small>'+E(l.mkTitle)+' · '+E(FUL(l.s))+' R'+E(l.rnd)+' '+E(l.raceName)+(l.src==='sim'?' · practice sim':'')+'</small></span></div>').join('')+'</div>';
}
function betsH(){
  const op=openBets(); let h='';
  const groups={}; op.forEach(b=>b.legs.forEach(l=>{ if(l.st==='open') groups[l.rk]=l; }));
  Object.keys(groups).forEach(rk=>{ const l=groups[rk];
    h+='<div class="vb-sim"><span>⏳ Waiting on <b>'+E(FUL(l.s))+' R'+E(l.rnd)+' '+E(l.raceName)+'</b> results</span><button class="vb-btn btn" data-sim="'+E(rk)+'">⚡ Simulate race (practice)</button></div>'; });
  if(op.length) h+='<h4 style="margin:18px 0 8px;font:900 12px Arial;letter-spacing:2px;color:#888">OPEN</h4>'+op.slice().reverse().map(betCard).join('');
  const done=S.bets.filter(b=>b.status!=='open');
  if(done.length) h+='<h4 style="margin:18px 0 8px;font:900 12px Arial;letter-spacing:2px;color:#888">SETTLED</h4>'+done.slice().reverse().slice(0,60).map(betCard).join('');
  return h||'<div class="vb-empty">No bets yet. Head to Markets, tap some odds and build a slip.</div>';
}
function codesH(){
  const used=(S.used||[]).map(h=>CODES.find(c=>c.h===h)).filter(Boolean), m=ui.cmsg;
  return '<div class="vb-code"><h3>Redeem a code</h3><p>Got a code? Enter it to add play money to your bankroll. Each code works once per account.</p>'+
    '<div class="vb-cr"><input class="vb-in" id="vb-code" placeholder="ENTER CODE" autocomplete="off" autocapitalize="characters" spellcheck="false"><button class="vb-btn hot" data-act="redeem">Redeem</button></div>'+
    '<div class="vb-cm'+(m?(m.ok?' ok':' bad'):'')+'">'+(m?E(m.msg):'')+'</div>'+
    (used.length?'<h4 style="margin:22px 0 8px;font:900 12px Arial;letter-spacing:2px;color:#888">REDEEMED</h4>'+used.map(c=>'<div class="vb-lg won"><span class="ic">✓</span><span><b>'+E(c.label||'Code')+'</b> · +'+money(c.amt)+'</span></div>').join(''):'')+'</div>';
}
function statsH(){
  const set=S.bets.filter(b=>b.status!=='open'), res=set.filter(b=>b.status==='won'||b.status==='lost');
  const staked=r2(res.reduce((a,b)=>a+b.stake,0)), ret=r2(res.reduce((a,b)=>a+(b.payout||0),0)), net=r2(ret-staked);
  const won=res.filter(b=>b.status==='won'), best=won.reduce((a,b)=>Math.max(a,b.payout-b.stake),0);
  let streak=0,kind=''; for(let i=set.length-1;i>=0;i--){ const k=set[i].status; if(k==='void') continue; if(!kind) kind=k; if(k===kind) streak++; else break; }
  const open=openBets().reduce((a,b)=>a+b.stake,0), pl=r2(S.bal+open-S.dep);
  const card=(v,l,c)=>'<div class="vb-stat"><b'+(c?' style="color:'+c+'"':'')+'>'+v+'</b><span>'+l+'</span></div>';
  const col=n=>n>0?'#4ade80':n<0?'#ef4444':'#fff';
  let h='<div class="vb-stats">'+card(money(S.bal),'Bankroll')+card((pl>0?'+':'')+money(pl),'Net P/L (all-time)',col(pl))+card(S.bets.length,'Bets placed')+
    card(won.length+'-'+(res.length-won.length),'Record (W-L)')+card(res.length?Math.round(won.length/res.length*100)+'%':'—','Hit rate')+
    card(staked?(net/staked*100>0?'+':'')+(net/staked*100).toFixed(1)+'%':'—','ROI',staked?col(net):'')+card(best?money(best):'—','Biggest win','#4ade80')+
    card(streak?streak+(kind==='won'?'W':'L'):'—','Streak',kind==='won'?'#4ade80':kind==='lost'?'#ef4444':'')+card(money(open),'At risk (open)')+'</div>';
  const pts=S.hist.slice(-150), W=700, H=170, pad=8;
  if(pts.length>1){
    const mn=Math.min(START,...pts.map(p=>p.b)), mx=Math.max(START,...pts.map(p=>p.b)), rg=Math.max(1,mx-mn);
    const X=i=>pad+i*(W-2*pad)/(pts.length-1), Y=v=>pad+(1-(v-mn)/rg)*(H-2*pad);
    h+='<div class="vb-ch"><h4>Bankroll history</h4><svg viewBox="0 0 '+W+' '+H+'"><line x1="'+pad+'" x2="'+(W-pad)+'" y1="'+Y(START)+'" y2="'+Y(START)+'" stroke="#333" stroke-dasharray="4 5"/>'+
      '<path d="'+pts.map((p,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(p.b).toFixed(1)).join(' ')+'" fill="none" stroke="#e8186d" stroke-width="2.6" stroke-linejoin="round"/></svg></div>';
  } else h+='<div class="vb-ch"><h4>Bankroll history</h4><div class="vb-empty">Place a bet to start your chart.</div></div>';
  return h;
}

/* slip */
function conflict(){
  const ms=new Set(), byR={};
  for(const l of slip.legs){
    const k=l.rk+'|'+l.mid; if(ms.has(k)) return 'A parlay can\'t include two picks from the same market ('+l.mkTitle+').'; ms.add(k);
    const set=byR[l.rk]=byR[l.rk]||new Set();
    for(const d of l.drivers||[]){ if(set.has(d)) return 'A parlay can\'t include the same driver twice in one race (correlated). Switch to Singles or remove one.'; }
    (l.drivers||[]).forEach(d=>set.add(d));
  }
  return '';
}
function calc(){
  const par=slip.legs.length>1&&ui.mode==='parlay';
  if(par){ const dec=slip.legs.reduce((a,l)=>a*l.dec,1), st=r2(parseFloat(slip.p)||0); return {par,dec,total:st,win:r2(st*(dec-1))}; }
  let total=0,win=0; slip.legs.forEach(l=>{ const st=r2(parseFloat(slip.stakes[l.id])||0); total+=st; win+=st*(l.dec-1); });
  return {par,total:r2(total),win:r2(win)};
}
function renderSlip(){
  const el=$('vb-slip'), n=slip.legs.length;
  let h='<div class="vb-sliphd" data-act="slipt"><b>Bet slip</b><span class="cnt">'+n+'</span></div>';
  if(!n){ el.innerHTML=h+'<div class="vb-empty">Tap any odds to add a selection.</div>'; return; }
  if(n>1) h+=tabsH([['singles','Singles'],['parlay','Parlay']],ui.mode,'mode','sm');
  const par=n>1&&ui.mode==='parlay';
  h+=slip.legs.map(l=>'<div class="vb-leg"><button class="rm" data-rm="'+E(l.id)+'" aria-label="Remove">×</button><div class="t"><span>'+E(l.label)+(l.mk==='h2h'?' <small style="display:inline">'+E(l.sub)+'</small>':'')+'</span><i>'+fmtAm(l.am)+'</i></div><small>'+E(l.mkTitle)+' · '+E(FUL(l.s))+' R'+E(l.rnd)+'</small>'+
    (par?'':'<input class="vb-in" inputmode="decimal" placeholder="Stake $" data-stake="'+E(l.id)+'" value="'+E(slip.stakes[l.id]||'')+'">')+'</div>').join('');
  h+='<div class="vb-chips">'+[10,25,50,100].map(v=>'<button data-chip="'+v+'">$'+v+'</button>').join('')+'<button data-chip="max">MAX</button></div>';
  if(par){
    const cf=conflict();
    h+='<input class="vb-in" inputmode="decimal" placeholder="Parlay stake $" data-pstake="1" value="'+E(slip.p||'')+'">'+(cf?'<div class="vb-warn">'+E(cf)+'</div>':'');
  }
  h+='<div class="vb-sum" id="vb-sum"></div><button class="vb-place" data-act="place">Place bet</button>';
  el.innerHTML=h; slipTotals();
}
function slipTotals(){
  const s=$('vb-sum'); if(!s) return; const c=calc();
  s.innerHTML=(c.par?'<div><span>Parlay odds ('+slip.legs.length+' legs)</span><b>'+fmtAm(amOfDec(c.dec))+'</b></div>':'')+
    '<div><span>Total stake</span><b>'+money(c.total)+'</b></div><div><span>Potential profit</span><b class="g">'+money(c.win)+'</b></div><div><span>Potential payout</span><b>'+money(r2(c.total+c.win))+'</b></div>';
}
function syncSel(){ ov.querySelectorAll('.vb-sel').forEach(b=>b.classList.toggle('on',slip.legs.some(l=>l.id===b.dataset.lid))); }
function refresh(){ renderHead(); renderFab(); if(ov.classList.contains('open')){ renderMain(); renderSlip(); } }

/* ───────── actions ───────── */
function toggleLeg(id){
  const i=slip.legs.findIndex(l=>l.id===id);
  if(i>=0){ slip.legs.splice(i,1); delete slip.stakes[id]; }
  else { const l=LEGS[id]; if(!l) return; slip.legs.push(l); if(slip.legs.length>1&&slip.legs.length===2) ui.mode=ui.mode||'singles'; $('vb-slip').classList.add('open'); }
  renderSlip(); syncSel();
}
function place(){
  const now=Date.now();
  for(const l of slip.legs){ const race=real.find(r=>r.rnd===l.rnd); if(!race||now>=closeAt(l.s,race)){ toast('Betting is closed for '+FUL(l.s)+' R'+l.rnd); return; } }
  const c=calc();
  if(c.total<=0){ toast('Enter a stake first'); return; }
  if(c.total>S.bal+.001){ toast('Not enough bankroll ('+money(S.bal)+')'); return; }
  const mk=(type,stake,legs,dec)=>({id:'b'+now.toString(36)+Math.random().toString(36).slice(2,6),ts:now,type,stake,dec,legs:legs.map(l=>Object.assign({},l,{st:'open'})),status:'open',payout:0});
  if(c.par){
    const cf=conflict(); if(cf){ toast(cf); return; }
    if(c.total<1){ toast('Minimum stake is $1'); return; }
    if(slip.legs.length>12){ toast('Max 12 legs per parlay'); return; }
    S.bets.push(mk('parlay',c.total,slip.legs,c.dec)); setBal(-c.total);
    slip.legs=[]; slip.p='';
  } else {
    const keep=[]; let placed=0;
    for(const l of slip.legs){
      const st=r2(parseFloat(slip.stakes[l.id])||0);
      if(st<=0){ keep.push(l); continue; }
      if(st<1){ toast('Minimum stake is $1'); return; }
      S.bets.push(mk('single',st,[l],l.dec)); setBal(-st); placed++; delete slip.stakes[l.id];
    }
    slip.legs=keep;
  }
  save(); toast('Bet placed ✔ · good luck'); renderSlip(); renderHead(); renderFab(); renderMain();
}
function simulate(rk){
  const l=S.bets.flatMap(b=>b.legs).find(x=>x.rk===rk); if(!l) return;
  const race=real.find(r=>r.rnd===l.rnd); if(!race) return;
  const rows=simRows(board(l.s,race)), w=rows.find(r=>r.pos===1&&!DNF_RE.test(r.note||''));
  const n=settle(k=>k===rk?rows:null);
  toast('Practice sim · '+(w?w.name+' wins':'chaos')+' · '+n+' bet'+(n===1?'':'s')+' settled');
}
function doReset(){
  if(!confirm('Reset your bankroll to '+money(START)+' and wipe all bet history and redeemed codes?')) return;
  S=blank(); slip.legs=[]; slip.stakes={}; slip.p=''; save(); refresh(); toast('Fresh start · '+money(START));
}
const normCode=c=>String(c||'').toUpperCase().replace(/[\s-]+/g,'');
async function codeHash(code){
  if(!(window.crypto&&crypto.subtle)) throw new Error('nocrypto');
  const te=new TextEncoder(), k=await crypto.subtle.importKey('raw',te.encode(normCode(code)),'PBKDF2',false,['deriveBits']);
  const bits=await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:te.encode(SALT),iterations:ITER},k,256);
  return Array.from(new Uint8Array(bits)).map(x=>x.toString(16).padStart(2,'0')).join('');
}
let fails=0, lockUntil=0;
async function redeem(code){
  if(Date.now()<lockUntil) return {ok:false,msg:'Too many tries — wait '+Math.ceil((lockUntil-Date.now())/1000)+'s'};
  if(!normCode(code)) return {ok:false,msg:'Enter a code first'};
  let h; try{ h=await codeHash(code); }catch(e){ return {ok:false,msg:'Codes need a secure (https) page'}; }
  const c=CODES.find(x=>x.h===h);
  if(!c){ if(++fails>=5){ lockUntil=Date.now()+30000; fails=0; } return {ok:false,msg:'Invalid code'}; }
  S.used=S.used||[];
  if(S.used.includes(h)) return {ok:false,msg:'You already redeemed that code'};
  S.used.push(h); S.dep=r2(S.dep+c.amt); setBal(c.amt); save(); refresh();
  return {ok:true,msg:'+'+money(c.amt)+' · '+(c.label||'Code redeemed')};
}
async function makeCode(code,amt,label){
  const h=await codeHash(code), line="{h:'"+h+"',amt:"+(+amt)+",label:'"+String(label||'Code').replace(/'/g,'')+"'},";
  console.log(line); return line;
}
async function doRedeem(){
  const inp=$('vb-code'); if(!inp) return; const r=await redeem(inp.value);
  ui.cmsg=r; renderMain(); if(r.ok) toast('🎁 '+r.msg);
}

/* ───────── events ───────── */
ov.addEventListener('click',e=>{
  const t=e.target, q=a=>t.closest('['+a+']');
  let el;
  if((el=q('data-lid'))){ if(!el.disabled) toggleLeg(el.dataset.lid); return; }
  if((el=q('data-rm'))){ toggleLeg(el.dataset.rm); return; }
  if((el=q('data-tab'))){ ui.tab=el.dataset.tab; renderMain(); return; }
  if((el=q('data-ser'))){ ui.s=el.dataset.ser; renderMain(); return; }
  if((el=q('data-mode'))){ ui.mode=el.dataset.mode; renderSlip(); return; }
  if((el=q('data-sim'))){ simulate(el.dataset.sim); return; }
  if((el=q('data-chip'))){
    const par=slip.legs.length>1&&ui.mode==='parlay', v=el.dataset.chip;
    const amt=v==='max'?Math.floor(S.bal/(par?1:Math.max(1,slip.legs.length))*100)/100:+v;
    if(par) slip.p=String(amt); else slip.legs.forEach(l=>slip.stakes[l.id]=String(amt));
    renderSlip(); return;
  }
  if((el=q('data-act'))){
    const a=el.dataset.act;
    if(a==='close') close();
    else if(a==='slipt'){ if(innerWidth<=900) $('vb-slip').classList.toggle('open'); }
    else if(a==='place') place();
    else if(a==='redeem') doRedeem();
    else if(a==='reset') doReset();
    else if(a==='daily'){ if(S.bonusDay!==day()){ S.bonusDay=day(); S.dep+=DAILY; setBal(DAILY); save(); refresh(); toast('🎁 +'+money(DAILY)+' daily bonus'); } }
    else if(a==='rebuy'){ if(S.bal<5&&!openBets().length){ S.dep+=REBUY; setBal(REBUY); save(); refresh(); toast('♻ Rebuy · +'+money(REBUY)); } }
  }
});
ov.addEventListener('input',e=>{
  const t=e.target;
  if(t.dataset.stake){ slip.stakes[t.dataset.stake]=t.value; slipTotals(); }
  else if(t.dataset.pstake){ slip.p=t.value; slipTotals(); }
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&ov.classList.contains('open')) close(); if(e.key==='Enter'&&e.target&&e.target.id==='vb-code') doRedeem(); });
fab.addEventListener('click',open);

function open(){ ov.classList.add('open'); document.body.style.overflow='hidden'; settle(); refresh(); }
function close(){ ov.classList.remove('open'); document.body.style.overflow=''; }

/* countdown + lock watcher + auto-settle */
let lastLock=null;
function tick(){
  const cd=$('vb-cd'); if(!cd) return; const c=+cd.dataset.c; if(!c){ cd.textContent=''; return; }
  const ms=c-Date.now();
  if(ms<=0){ cd.className='cd closed'; cd.textContent='🔒 Betting closed'; return; }
  const s=Math.floor(ms/1000), d=Math.floor(s/86400), h=Math.floor(s%86400/3600), m=Math.floor(s%3600/60);
  cd.textContent='Betting closes in '+(d?d+'d ':'')+h+'h '+String(m).padStart(2,'0')+'m '+String(s%60).padStart(2,'0')+'s';
}
setInterval(()=>{
  if(!ov.classList.contains('open')) return;
  const cd=$('vb-cd'); const lock=cd?(+cd.dataset.c&&Date.now()>=+cd.dataset.c):null;
  if(lastLock!==null&&lock!==lastLock&&ui.tab==='markets') renderMain();
  lastLock=lock; tick();
},1000);
setInterval(()=>settle(),15000);
document.addEventListener('visibilitychange',()=>{ if(!document.hidden) settle(); });

/* ───────── boot ───────── */
settle(); renderHead(); renderFab();
window.VMSBets={open,close,reset:doReset,state:()=>S,redeem,makeCode,odds:s=>{ const r=raceFor(s); return r?board(s,r):null; }};
try{ if((window.__VMS_HASH0||location.hash)==='#bets') open(); }catch(e){}
})();
