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
    const rows=e.rows.map((x,i)=>({pos:+x.pos||i+1,name:x.name,team:x.team||'',pts:+x.pts||0,fl:!!x.fl,pole:!!x.pole,note:x.note||'',status:x.status||'',wccOnly:!!x.wccOnly,gap:x.gap||''}));
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
  $('resMeta').innerHTML=`<span>${esc(race.flag)} <b>${esc(race.circuit)}</b></span><span>${esc(dates(race))}</span><span>${esc(FULL[rs.series])} · ${esc(sd.day)} ${esc(sd.time)}</span>`;
  const hasGap=rows.some(r=>r.gap);
  $('resBoard').innerHTML=`<table><thead><tr><th>Pos</th><th>Driver</th><th>Team</th>${hasGap?'<th>Gap</th>':''}<th>Notes</th><th>Pts</th></tr></thead><tbody>${
    rows.map(r=>`<tr class="click" data-name="${esc(r.name)}"><td class="${r.pos<=3?'pos':''}">P${r.pos}</td><td><b>${esc(r.name)}</b>${r.pole?'<span class="tag pole">Pole</span>':''}${r.fl?'<span class="tag fl">FL</span>':''}</td><td class="muted">${esc(r.team)}</td>${hasGap?`<td class="muted">${esc(r.gap||'')}</td>`:''}<td class="note">${esc(r.note||'')}</td><td class="points">${r.pts}</td></tr>`).join('')
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
 

const VIEWS=['home', 'standings', 'calendar', 'results', 'news', 'teams', 'about', 'join'];
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
  const a=document.createElement('a'); a.href='#records'; a.dataset.v='records'; a.textContent='Season Records';
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
      <div class="lp-tags">${x.pole?'<span class="tag pole">Pole</span>':''}${x.fl?'<span class="tag fl">Fastest Lap</span>':''}</div><div class="lp-p">${x.pts}<small>PTS</small></div>${x.gap?`<div class="lp-gap">${esc(x.gap)}</div>`:''}${x.note?`<div class="lp-note">${esc(x.note)}</div>`:''}${tie?`<div class="lp-tie">⇄ ${tie}</div>`:''}</div>`;
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
