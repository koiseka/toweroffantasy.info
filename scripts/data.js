var attack, defense, health, crit;

// 1-15 purple
// 16-30 blue
// 31-40 green
var psp = 'images/affinity/1.png';
var snowglobe = 'images/affinity/2.png';
var pearl = 'images/affinity/3.png';
var kitchenware = 'images/affinity/4.png';
var tataCards = 'images/affinity/5.png';
var present = 'images/affinity/6.png';
var ufo = 'images/affinity/7.png';
var seal = 'images/affinity/8.png';
var goldCoin = 'images/affinity/9.png';
var tataFigure = 'images/affinity/10.png';
var bearFigure = 'images/affinity/11.png';
var foxFigure = 'images/affinity/12.png';
var catFigure = 'images/affinity/13.png';
var miaFigure = 'images/affinity/14.png';
var peppaFigure = 'images/affinity/15.png';
var toolbox = 'images/affinity/16.png';
var chessSet = 'images/affinity/17.png';
var tataPlush = 'images/affinity/18.png';
var suit = 'images/affinity/19.png';
var juicePouch = 'images/affinity/20.png';
var necklace = 'images/affinity/21.png';
var catPlush = 'images/affinity/22.png';
var diary = 'images/affinity/23.png';
var vial = 'images/affinity/24.png';
var perfume = 'images/affinity/25.png';
var spiderFigure = 'images/affinity/26.png';
var elfFigure = 'images/affinity/27.png';
var pumpkinFigure = 'images/affinity/28.png';
var robotFigure = 'images/affinity/29.png';
var androidFigure = 'images/affinity/30.png';
var flowers = 'images/affinity/31.png';
var dumbbells = 'images/affinity/32.png';
var photoAlbum = 'images/affinity/33.png';
var photo = 'images/affinity/34.png';
var scarf = 'images/affinity/35.png';
var tradingCard = 'images/affinity/36.png';
var plant = 'images/affinity/37.png';
var harmonica = 'images/affinity/38.png';
var pinwheel = 'images/affinity/39.png';
var snackBox = 'images/affinity/40.png';
var strangePlant = 'images/affinity/41.png';
var strangeFragment = 'images/affinity/42.png';
var princeTataFigure = 'images/affinity/43.png';
var bunnyDoll = 'images/affinity/44.png';
var linyeFigure = 'images/affinity/45.png';


var samir = 
    {
        name:"Samir",
        rarity: "SSR",
        pic:"images/samir_nobg.png",
        artwork:"images/art/samir.png",
        wepName:"Dual EM Stars",
        wepImg:"images/wep/samir.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will <span class='text-blue'>paralyze</span> targets for <span class='text-blue'>1</span> second and electrify them for <span class='text-blue'>6</span> seconds, negating all buffs and dealing damage equal to <span class='text-blue'>144.00%</span> of ATK. Targets can't receive any buffs for the next <span class='text-blue'>6</span> seconds.",
        awakening:[
            // 1 star
            "Trigger an electrical explosion on the target after landing a critical hit, dealing additional damage equal to <span class='text-blue'>30%</span> of ATK to the target and nearby enemies. Cooldown: <span class='text-blue'>0.5</span> seconds.",
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "Increase crit rate to electrified targets by <span class='text-blue'>40%</span>. Electrical explosions extend the duration of electrified effects by <span class='text-blue'>0.5</span> seconds, up to a maximum of <span class='text-blue'>5</span> seconds.",
            // 4 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Double the duration of Electro Field and pull targets into the center of the attack.",
            // 6 star
            "Triggering an electrical explosion reduces skill cooldowns by 1 second."
        ],
        energyCharge:["10.70","s"],
        shieldBreak:["6.00","b"],
        materials:["electric","red","black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/samir.png",
        chipEffect:[
            // 2 set
            "Increase damage progressively by <span class='text-blue'>1%</span> upon hitting a target. Stack up to <span class='text-blue'>10/13/16/20</span> times. Lasts <span class='text-blue'>1.5</span> seconds.<br><img class='flag' src='images/cn.svg'> Each hit increases attack by <span class='text-blue'>1.5%</span>, up to <span class='text-blue'>10/13/16/20</span> stacks, lasting <span class='text-blue'>2</span> seconds and refreshing with each hit.",
            // 4 set
            "Increase Dual EM Stars' electrical explosion damage by <span class='text-blue'>16%/22%/30%/40%</span> of ATK.<br><img class='flag' src='images/cn.svg'> Adds an extra hit to every attack for <span class='text-blue'>10%/12.5%/15%/17.5%</span> damage (can not crit)."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Samir"',
            // 600 affinity
            "Unlock communication [Solo Dance]",
            // 1200 affininty
            "Grant <span class='text-blue'>1</span> stack of Concentration for every <span class='text-blue'>4</span> seconds when Samir receives no damage. Each stack increases damage dealt by <span class='text-blue'>3%</span>, and can stack up to <span class='text-blue'>4</span> times. After being hit, Samir loses <span class='text-blue'>1</span> stack of Concentration, up to <span class='text-blue'>1</span> stack per <span class='text-blue'>1</span> second.",
            // 2000 affinity
            "Unlock communication [Resonance]",
            // 3000 affinity
            "Unlock communication [Concerto]",
            // 4000 affinity
            "Grant <span class='text-blue'>1</span> stack of Concentration for every <span class='text-blue'>4</span> seconds when Samir receives no damage. Each stack increases damage dealt by <span class='text-blue'>4%</span>, and can stack up to <span class='text-blue'>5</span> times. After being hit, Samir loses <span class='text-blue'>1</span> stack of Concentration, up to <span class='text-blue'>1</span> stack per <span class='text-blue'>2</span> second."
        ],
        traits: ['Female','171 cm','???','Taurus','20 May'],
        gifts: [
            foxFigure,'+60', // pink fox
            psp,'+60', // psp
            present,'+60', // pink present
            ufo,'+60', // ufo
            pearl,'+60', // pearl
            princeTataFigure, '+60',
            
            tataPlush,'+30', // tata plush
            chessSet,'+30', // chessboard
            catPlush,'+30', // cat plush
            diary,'+30', // diary
            robotFigure,'+30', //r2d2 figure
            bunnyDoll, '+30',
            
            tradingCard,'+15', // trading card
            pinwheel,'+15' // pinwheel
        ],
        recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['karasuma', 2],
            ['samir', 4],
            ['guardscode', 3],
            ['peppa', 3]
        ]
    }

var coco = 
    {
        name:"Coco Ritter",
        rarity: "SSR",
        pic:"images/coco_nobg.png",
        artwork:"images/art/coco.png",
        wepName:"Absolute Zero",
        wepImg:"images/wep/coco.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_support.png",
        wepEffect:"Fully charged weapons will <span class='text-blue'>freeze</span> the target for <span class='text-blue'>2</span> seconds and leave it frostbitten for <span class='text-blue'>6</span> seconds. Breaking the ice shell causes additional damage equal to <span class='text-blue'>151.00%</span> of ATK. While frostbitten, the target's weapon charge rate is reduced by <span class='text-blue'>50%</span>.",
        awakening:[
            // 1 star
            "After dodging, summon a healing bee that follows the user and heals the ally with the lowest percentage of HP within <span class='text-blue'>15</span> meters. Heal for <span class='text-blue'>25%</span> of ATK and restore <span class='text-blue'>50</span> weapon charge points each time and last for <span class='text-blue'>25</span> seconds. Cooldown: <span class='text-blue'>25</span> seconds.",
            // 2 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "Use <strong class='text-orange'>Sanctuary</strong> or discharge skills to remove debuffs from targets, can be used while being affect by control effects. Increase shatter and damage dealt for all teammates within range by <span class='text-blue'>20%</span>, and grant them immunity to control effects and shatter.",
            // 4 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Increase healing effect by <span class='text-blue'>15%</span>, plus an additional <span class='text-blue'>20%</span> when healing targets with less than <span class='text-blue'>60%</span> HP.",
            // 6 star
            "Whenever a healing bee is summoned or disappears from battle, heal all allies for <span class='text-blue'>100%</span> of the user's ATK. All allies within <span class='text-blue'>6<span> meters of the healing bee also gain <span class='text-blue'>10%</span> damage boost (cannot stack)."
        ],
        energyCharge:["12.50","s"],
        shieldBreak:["4.00","b"],
        materials:["ice", "green", "blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/coco.png",
        chipEffect:[
            // 2 set
            "Healing power and healing received increased by 8%/10%/12%/14%.",
            // 4 set
            "When allies and yourself receive healing effects, attack is increased by 10%/12.5%/15%/17.5% for 2 sec."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Coco Ritter"',
            // 600 affinity
            "Unlock communication [Some Memories]",
            // 1200 affininty
            "When Coco uses a secondary weapon, the healing effect is increased 20%",
            // 2000 affinity
            "Unlock communication [Some Obsessions]",
            // 3000 affinity
            "Unlock communication [Some Companionship]",
            // 4000 affinity
            "When Coco uses a secondary weapon, the healing effect is increased 20% and attack power of surrounding allies is increased 15% for 3 seconds when using a secondary weapon's combo or weapon skill"
        ],
        traits: ['Female','147 cm','Hagarde','Gemini','1 Jun'],
        gifts: [
            foxFigure,'+60', // pink fox figure
            catFigure,'+60', // cat figure
            present,'+60', // pink present
            ufo,'+60', // ufo
            miaFigure,'+60', // mia figure
            seal,'+60', // seal
            
            tataPlush,'+30', // tata plush
            spiderFigure, '+30',
            vial, '+30',
            elfFigure, '+30',
            bunnyDoll, '+30',
            catPlush,'+30', // cat plush
            robotFigure,'+30', //r2d2 figure
            
            photoAlbum, '+15',
            photo, '+15',
            plant, '+15',
            harmonica, '+15',
            pinwheel, '+15'
        ],
        recChips: [
            ['coco', 2],
            ['coco', 4],
            ['meryl', 2],
            ['zero', 4],
            ['peppa', 3],
            ['transportthinking', 3]
        ]
    }

var king = 
    {
        name:"KING",
        rarity: "SSR",
        pic:"images/king_nobg.png",
        artwork:"images/art/king.png",
        wepName:"Scythe of the Crow",
        wepImg:"images/wep/king.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will set the target on fire for <span class='text-blue'>8</span> seconds with the next attack, causing ongoing damage of <span class='text-blue'>58.00%</span> of ATK every second. Ignited targets receive <span class='text-blue'>50%</span> efficacy from healing.",
        awakening:[
            // 1 star
            "Increase shatter by <span class='text-blue'>15%</span>. After shattering the target's shield, deal damage equal to <span class='text-blue'>120%</span> of ATK to the target every second for <span class='text-blue'>15</span> seconds.",
            // 2 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "Increase damage dealt by <span class='text-blue'>6%</span> for each enemy within <span class='text-blue'>6</span> meters, up to a maximum of <span class='text-blue'>30%</span>.",
            // 4 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Increase damage dealt against HP shields or shielded enemies by <span class='text-blue'>100%</span>.",
            // 6 star
            "Increase damage dealt by <span class='text-blue'>10%</span> for each enemy slain for <span class='text-blue'>30</span> seconds (stack up to <span class='text-blue'>3</span> times)."
        ],
        energyCharge:["5.00","b"],
        shieldBreak:["12.50","s"],
        materials:["fire", "green", "blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/king.png",
        chipEffect:[
            // 2 set
            "For every 10% of shield broken, gain a 4%/5%/6%/7% damage buff, up to 3 stacks, lasting 25s",
            // 4 set
            "When surrounded by more than 2 enemies, attacks restore 10%/12%/13%/14% damage to HP--will not exceed 30%/33%/34.5%/36% attack power--every 0.5s."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "KING"',
            // 600 affinity
            "Unlock communication [Trading Fiction]",
            // 1200 affininty
            "King restores <span class='text-blue'>8%</span> HP for every <span class='text-blue'>7</span> enemies he defeats",
            // 2000 affinity
            "Unlock communication [Peer-to-peer Contract]",
            // 3000 affinity
            "Unlock communication [Betting]",
            // 4000 affinity
            "King restores <span class='text-blue'>10%</span> HP for every <span class='text-blue'>5</span> enemies he defeats"
        ],
        traits: ['Male','190 cm','Crown','Scorpio','3 Nov'],
        gifts: [
            seal, '+80',
            goldCoin, '+80',
            
            kitchenware, '+60',
            tataCards, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            miaFigure, '+60',
            tataFigure, '+60',
            ufo, '+60',
            psp, '+60',
            snowglobe, '+60',
            linyeFigure, '+60',
            
            necklace, '+30',
            vial, '+30',
            
            photo, '+15',
            snackBox, '+15',
            harmonica, '+15',
            strangePlant, '+15'
        ],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['burstingcore', 3],
            ['offensivelogic', 3]
        ]
    }

var shiro = 
    {
        name:"Shiro",
        rarity: "SSR",
        pic:"images/shiro_nobg.png",
        artwork:"images/art/shiro.png",
        wepName:"Chakram of the Seas",
        wepImg:"images/wep/shiro.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will inflict damage equal to <span class='text-blue'>137.00%</span> of ATK with the next attack, and make the target grievous for <span class='text-blue'>7</span> seconds, taking <span class='text-blue'>20%</span> extra damage.",
        awakening:[
            // 1 star
            "Increase damage dealt to and all elemental shattering effects on targets within <span class='text-green'>Full Bloom</span>'s range by <span class='text-blue'>30%</span>.",
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "Increase shatter by <span class='text-blue'>15%</span> and reset all weapon skill cooldowns upon shattering the target's shield. Can only be triggered once every <span class='text-blue'>30</span> seconds.",
            // 4 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Attacking a grievous target extends the duration of grievous by an additional <span class='text-blue'>7</span> seconds (only take effect once for the same effect).",
            // 6 star
            "After using <span class='text-green'>Full Bloom</span>, grant a 100% crit chance for the next <span class='text-blue'>8</span> seconds."
        ],
        energyCharge:["6.00","b"],
        shieldBreak:["10.00","a"],
        materials:["physical","green","black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/shiro.png",
        chipEffect:[
            // 2 set
            "15%/19%/22.5%/26% increase in damage and shield breaking to targets above 50% health",
            // 4 set
            "20%/25%/30%/35% damage boost when entering combat for 20 seconds, resets after 5 seconds out of combat."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Shiro"',
            // 600 affinity
            "Unlock communication [Passive Partner]",
            // 1200 affininty
            "When Shiro releases her weapon skill or combo skill, her full attack is increased by <span class='text-blue'>10%</span>, and her physical attack is increased by <span class='text-blue'>7%</span> for 8 seconds, cooldown 16 sec.",
            // 2000 affinity
            "Unlock communication [Sea Waves]",
            // 3000 affinity
            "Unlock communication [Song of the Secret Collection]",
            // 4000 affinity
            "When Shiro releases her weapon skill or combo skill, her full attack is increased by <span class='text-blue'>16%</span>, and her physical attack is increased by <span class='text-blue'>10%</span> for 8 seconds, cooldown 16 sec."
        ],
        traits: ['Female','163 cm','Warren','Virgo','22 Sep'],
        gifts: [
            kitchenware, '+80',
            seal, '+80',
            
            miaFigure, '+60',
            goldCoin, '+60',
            foxFigure, '+60',
            ufo, '+60',
            bearFigure, '+60',
            snowglobe, '+60',
            present, '+60',
            pearl, '+60',
            linyeFigure, '+60',
            
            vial, '+30',
            necklace, '+30',
            toolbox, '+30',
            strangeFragment, '+30',
            
            dumbbells, '+15',
            harmonica, '+15',
            photo, '+15',
            strangePlant, '+15'
        ],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['samir', 2],
            ['arrogantprovocation', 3],
            ['offensivelogic', 3]
        ]
    }

var cobalt = 
    {
        name:"Cobalt-B",
        rarity: "SSR",
        pic:"images/cobalt_nobg.png",
        artwork:"images/art/cobalt.png",
        wepName:"Blazing Revolver",
        wepImg:"images/wep/cobalt.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will set the target on fire for <span class='text-blue'>8</span> seconds with the next attack, causing ongoing damage of <span class='text-blue'>58.00%</span> of ATK every second. Ignited targets receive <span class='text-blue'>50%</span> efficacy from healing.",
        awakening:[
            // 1 star
            "3% of the target's current life is added to each attack, up to a maximum of 180% of the attack.",
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "the skill Blast Grenade applies a powerful burn to the target in ignition state, dealing 1% of the target's current life per second, up to a maximum of 60% of the attack, for 10 seconds.",
            // 4 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "The effect of Blast Grenade is increased to no more than 90% of the attack, and a hit from any weapon's Dodge attack refreshes the duration of Blast Grenade Debuff time.  ",
            // 6 star
            "The cooldown time of the Blast Grenade skill is reduced by 3 seconds after any weapon's Dodge attack hits the target. This ability has a 1.5 seconds cooldown time."
        ],
        energyCharge:["10.00","a"],
        shieldBreak:["6.50","b"],
        materials:["fire", "red", "black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/cobalt.png",
        chipEffect:[
            // 2 set
            "Restore 1 dodge every 4 dodges. Dodge attacks add burn to the target, dealing 12%/15%/18%/21% attack damage per second  for 6 seconds.",
            // 4 set
            "Increases damage by 12%/15%/18%/21% to targets with abnormal statuses."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Cobalt-B"',
            // 600 affinity
            "Unlock communication [Respect]",
            // 1200 affininty
            "When Cobalt-B releases a combo, it restores <span class='text-blue'>50-120</span> points of energy charge at random.",
            // 2000 affinity
            "Unlock communication [Pleasant Cooperation]",
            // 3000 affinity
            "Unlock communication [Comapnions & Weapons]",
            // 4000 affinity
            "When Cobalt-B releases a combo, it restores <span class='text-blue'>90-180</span> points of energy charge at random."
        ],
        traits: ['Female','157 cm','Crown','Cancer','26 Jun'],
        gifts: [
            kitchenware, '+80',
            goldCoin, '+80',
            
            seal, '+60',
            tataCards, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            bearFigure, '+60',
            tataFigure, '+60',
            present, '+60',
            psp, '+60',
            linyeFigure, '+60',
            pearl, '+60',
            
            necklace, '+30',
            toolbox, '+30',
            strangeFragment, "+30",
            
            dumbbells, '+15',
            snackBox, '+15',
            strangePlant, '+15'
        ],
        recChips: [
            ['cobalt', 4],
            ['samir', 2],
            ['samir', 4],
            ['karasuma', 2],
            ['burstingcore', 3]
        ]
    }

var claudia = 
    {
        name:"Claudia",
        rarity: "SSR",
        pic:"images/claudia_nobg.png",
        artwork:"images/art/claudia.png",
        wepName:"Guren Blade",
        wepImg:"images/wep/claudia.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will inflict damage equal to <span class='text-blue'>137.00%</span> of ATK with the next attack, and make the target grievous for <span class='text-blue'>7</span> seconds, taking <span class='text-blue'>20%</span> extra damage.",
        awakening:[
            // 1 star
            "After hitting a target with a skill or discharge skill, grant a stack of damage boost, which increases damage dealt by <span class='text-blue'>8%</span> for <span class='text-blue'>25</span> seconds (stacks up to <span class='text-blue'>3</span> times; each successful skill or discharge use can only grant a single stack).",
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "Hitting a target with a skill or discharge skill applies a stack of War Wounds to the target, increasing incoming physical damage and shatter effects from physical and elemental weapons taken by the target by <span class='text-blue'>10%</span> for <span class='text-blue'>15</span> seconds. Stack up to <span class='text-blue'>1</span> time.",
            // 4 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Hitting targets with discharge skills grants skill damage boost, which increases all weapon skill damage by <span class='text-blue'>20%</span> for <span class='text-blue'>15</span> seconds (cannot stack).",
            // 6 star
            "Hitting the same target no longer reduces the damage dealt. After using Guren Blade or a discharge skill, applies <span class='text-blue'>1</span> stack of War Wounds to all targets within 8 meters."
        ],
        energyCharge:["12.00","s"],
        shieldBreak:["7.50","a"],
        materials:["physical", "red", "blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/claudia.png",
        chipEffect:[
            // 2 set
            "Aerial attack damage increased 13%/17%/20%/23% and double jump is reset after hitting a target in the air",
            // 4 set
            "After the skill hits, reduces all weapon skill cooldown by 1.5/2/2.5/3s, and increases combo skill damage by 36%/45%/54%/63% for 15s"
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Claudia"',
            // 600 affinity
            "Unlock communication [Please Tell Me More]",
            // 1200 affininty
            "Stealth for <span class='text-blue'>1s</span> after dodging",
            // 2000 affinity
            "Unlock communication [Enthusiasm]",
            // 3000 affinity
            "Unlock communication [Engagement]",
            // 4000 affinity
            "Stealth for <span class='text-blue'>1.5s</span> after dodging"
        ],
        traits: ['Female','170 cm','Hagarde','Capricorn','16 Jan'],
        gifts: [
            snowglobe, '+80',
            peppaFigure, '+80',
            
            seal, '+60',
            tataCards, '+60',
            miaFigure, '+60',
            catFigure, '+60',
            princeTataFigure, '+60',
            ufo, '+60',
            
            suit, '+30',
            juicePouch, '+30',
            vial, '+30',
            perfume, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            flowers, '+15',
            photoAlbum, '+15',
            photo, '+15',
            scarf, '+15',
            plant, '+15',
            harmonica, '+15'
        ],
        recChips: [
            ['claudia', 2],
            ['claudia', 4],
            ['samir', 2],
            ['karasuma', 2],
            ['peppa', 3],
            ['arrogantprovocation', 3]
        ]
    }

var baiyuekui = 
    {
        name:"Baiyuekui",
        rarity: "SSR",
        pic:"images/baiyuekui_nobg.png", 
        artwork:"images/art/baiyuekui.png",
        wepName:"Eighth Consciousness", //Alaya Vijnana "Base [of] Consciousness"
        wepImg:"images/wep/baiyuekui.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will <span class='text-blue'>paralyze</span> targets for <span class='text-blue'>1</span> second and electrify them for <span class='text-blue'>6</span> seconds, negating all buffs and dealing damage equal to <span class='text-blue'>144.00%</span> of ATK. Targets can't receive any buffs for the next <span class='text-blue'>6</span> seconds.",
        exclusiveEffect:"When entering combat, turn on Battle Spirit and increase your final damage by 15%. and your cellular aging is accelerated (reducing your current life by 1% every 5 seconds), which clears when you leave combat [the effect of switching weapons disappears]. If your life drops below 50%, cellular aging stops and the Battle Intent booster effect remains (the effect of switching weapons disappears).",
        awakening:[
            // 1 star
            "Dodge attacks hits for an additional 80% attack + 2.5% of your lost life. The weapon skill explodes with additional 160% attack + 5% damage to your lost life. The Force Field release hits with an additional 160% attack + 5% of your lost life (continuous damage does not trigger).",
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "15% more shield break efficiency, and releases an instant burst canister at the target location, dealing 680% attack damage to targets within range, or 1500% attack damage to monsters if there is only one target within range.",
            // 4 star
            "+32% base health.",
            // 5 star
            "When you are attacked, you automatically trigger a 1 second block (when in crowd control, it will immediately release the crowd control), blocking one damage up to 20% of your maximum life, and when you click on a normal attack during the block, you can release a counter-attack slash, dealing 240% attack damage and forcing the target to airborne. ",
            // 6 star
            "When in the range of the Force Field or matrix, you get a 7-second Battle Spirit effect that increases your final damage to 40% and stops cellular aging (the effect of switching weapons disappears)."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["12.50","s"],
        materials:["electric","green","blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/baiyuekui.png",
        chipEffect:[
            // 2 set
            "If you have 300~999 charge when switching to this weapon, use 300 points to gain a 15%/18%/21%/25% attack boost for 10 seconds, cooldown 5 seconds, does not stack.",
            // 4 set
            "For every 1 second that a combo is released, the next combo will deal 106%/122%/140%/160% ranged damage (3m radius) to the first enemy, up to 530%/610%/700%/800%; and gain 4 seconds of shield breaking increase of 7%/14%/21%/28%, does not stack. This set also works in the background but only the highest star level set works when multiple sets are equipped."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Baiyuekui"',
            // 600 affinity
            "Unlock communication [I am Baiyuekui]",
            // 1200 affininty
            "When Bai Yuekui enters combat, the electric attack power is increased by <span class='text-blue'>21%</span>, the effect decays over time and lasts for 120 seconds. The effect can be reset after 5 seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by 50%.",
            // 2000 affinity
            "Unlock communication [Knowing the New World]",
            // 3000 affinity
            "Unlock communication [I Have Many Stories]",
            // 4000 affinity
            'When Bai Yuekui enters combat, the electric attack power is increased by <span class="text-blue">33%</span>, the effect decays over time and lasts for 120 seconds. The effect can be reset after 5 seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by 50%.'
        ],
        traits: ['Female','172 cm','???','???','???'],
        gifts: [
            goldCoin, '+80',
            catFigure, '+80',
            
            kitchenware, '+60',
            tataFigure, '+60',
            tataCards, '+60',
            peppaFigure, '+60',
            snowglobe, '+60',
            psp, '+60',
            foxFigure, '+60',
            seal, '+60',
            princeTataFigure, '+60',
            linyeFigure, '+60',
            
            necklace, '+30',
            elfFigure, '+30',
            spiderFigure, '+30',
            
            photoAlbum, '+15',
            snackBox, '+15',
            plant, '+15',
            strangePlant, '+15'
        ],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['samir', 2],
            ['karasuma', 2],
            ['guardscode', 3],
            ['offensivelogic', 3]
        ]
    }

var meryl = 
    {
        name:"Meryl",
        rarity: "SSR",
        pic:"images/meryl_nobg.png",
        artwork:"images/art/meryl.png",
        wepName:"Rosy Edge",
        wepImg:"images/wep/meryl.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"Fully charged weapons will <span class='text-blue'>freeze</span> the target for <span class='text-blue'>2</span> seconds and leave it frostbitten for <span class='text-blue'>6</span> seconds. Breaking the ice shell causes additional damage equal to <span class='text-blue'>151.00%</span> of ATK. While frostbitten, the target's weapon charge rate is reduced by <span class='text-blue'>50%</span>.",
        awakening:[
            // 1 star
            "Increase shatter by <span class='text-blue'>15%</span> and restore <span class='text-blue'>10%</span> of HP after shattering the target's shield.",
            // 2 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "Obtain Health Ice Shield with <span class='text-blue'>10%</span> maximum health value when the weapon is switched; cooldown takes <span class='text-blue'>20</span> seconds; Ice Shield lasts up to <span class='text-blue'>10</span> seconds.",
            // 4 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Increase damage and shatter by <span class='text-blue'>50%</span> while the shield is active.",
            // 6 star
            "Health Ice Shield with a health value of up to <span class='text-blue'>20%</span> is obtained when switched to the weapon. The shield provides immunity to control effects; cooldown takes <span class='text-blue'>20</span> seconds; Ice Shield lasts up to <span class='text-blue'>10</span> seconds."
        ],
        energyCharge:["4.00","b"],
        shieldBreak:["12.00","s"],
        materials:["ice", "red", "black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/meryl.png",
        chipEffect:[
            // 2 set
            "When dropping below 30% health, gain a shield of 15%/19%/22.5%/26% of maximum life for 10 seconds, cooldown 120 seconds",
            // 4 set
            "Converts 60%/75%/90%/105% of damage dealth during shield to health, restores no more than 105%/127.5%/150%/172.5% of attack power every 0.5 seconds"
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Meryl"',
            // 600 affinity
            "Unlock communication [Cold Conversation]",
            // 1200 affininty
            "Meryl takes 20% less ice damage, is immune to frostbite, and is frozen for 50% less time.",
            // 2000 affinity
            "Unlock communication [Severe Cold Daily]",
            // 3000 affinity
            "Unlock communication [Melting Ice]",
            // 4000 affinity
            "Meryl takes 20% less ice damage, is immune to frostbite, and is frozen for 50% less time. Meryl's surroundings will freeze."
        ],
        traits: ['Female','170 cm','???','Libra','10 October'],
        gifts: [
            seal, '+80',
            
            goldCoin, '+60',
            miaFigure, '+60',
            foxFigure, '+60',
            snowglobe, '+60',
            kitchenware, '+60',
            ufo, '+60',
            linyeFigure, '+60',
            
            necklace, '+30',
            vial, '+30',
            
            photo, '+15',
            harmonica, '+15',
            strangePlant, '+15'
        ],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['transportthinking', 2],
            ['offensivelogic', 3],
            ['cleanupagreement', 3]
        ]
    }

var hane = 
    {
        name:"Tsubasa",
        rarity: "SSR",
        pic:"images/hane_nobg.png",
        artwork:"images/art/hane.png",
        wepName:"Icewind Arrow",
        wepImg:"images/wep/hane.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will <span class='text-blue'>freeze</span> the target for <span class='text-blue'>2</span> seconds and leave it frostbitten for <span class='text-blue'>6</span> seconds. Breaking the ice shell causes additional damage equal to <span class='text-blue'>151.00%</span> of ATK. While frostbitten, the target's weapon charge rate is reduced by <span class='text-blue'>50%</span>.",
        awakening:[
            // 1 star
            "Grant a stack of Sharp Arrow each time the arrow fired by a Dodge attack hits a target. Each stack increases damage by <span class='text-blue'>8%</span> for <span class='text-blue'>15</span> seconds. Stack up to <span class='text-blue'>3</span>.",
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "Launching a Dodge attack fires <span class='text-blue'>3</span> Charged Arrows.",
            // 4 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Double duration of Arrow Rain and slow targets by <span class='text-blue'>25%</span>.",
            // 6 star
            "Sharp Arrow stacks up to <span class='text-blue'>5<span> times. Hitting a target with Charged Arrow immediately grants <span class='text-blue'>3</span> stacks, headshots grant <span class='text-blue'>5</span> stacks."
        ],
        energyCharge:["11.50","s"],
        shieldBreak:["4.00","b"],
        materials:["ice","red","blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/hane.png",
        chipEffect:[
            // 2 set
            "Increase damage by 10%/12.5%/15%/17.5% if no enemy unit is within 4 meters",
            // 4 set
            "Boosts your attack by 12%/15%/18%/21% for 8 seconds after a headshot."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Hane"',
            // 600 affinity
            "Unlock communication [Natural Warmth]",
            // 1200 affininty
            "Each time Hane deals damage, gain 1 stack of Strong Strike (can stack 1 stack every 1 sec, up to <span class='text-blue'>15</span> stacks). Each stack increases attack by <span class='text-blue'>0.5%</span> and refreshes buff duration.",
            // 2000 affinity
            "Unlock communication [Cooling Alarm]",
            // 3000 affinity
            "Unlock communication [Hot and Cold]",
            // 4000 affinity
            "Each time Hane deals damage, gain 1 stack of Strong Strike (can stack 1 stack every 1 sec, up to <span class='text-blue'>30</span> stacks). Each stack increases attack by <span class='text-blue'>0.6%</span> and refreshes buff duration."
        ],
        traits: ['Female','169 cm','Astra','Aries','24 Mar'],
        gifts: [
            tataPlush, '+80',
            miaFigure, '+80',
            
            seal, '+60',
            tataCards, '+60',
            bearFigure, '+60',
            catFigure, '+60',
            ufo, '+60',
            psp, '+60',
            goldCoin, '+60',
            snowglobe, '+60',
            linyeFigure, '+60',
            
            vial, '+30',
            pumpkinFigure, '+30',
            androidFigure, '+30',
            
            photo, '+15',
            snackBox, '+15',
            harmonica, '+15'
        ],
        recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['karasuma', 2],
            ['peppa', 3],
            ['transportthinking', 3]
        ]
    }

var huma = 
    {
        name:"Huma",
        rarity: "SSR",
        pic:"images/huma_nobg.png",
        artwork:"images/art/huma.png",
        wepName:"Molten Shield V2",
        wepImg:"images/wep/huma.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"Fully charged weapons will set the target on fire for <span class='text-blue'>8</span> seconds with the next attack, causing ongoing damage of <span class='text-blue'>58.00%</span> of ATK every second. Ignited targets receive <span class='text-blue'>50%</span> efficacy from healing.",
        awakening:[
            // 1 star
            "Using a Dodge skill or branch skill while in shield form grants a stack of Strong Shield, which grants <span class='text-blue'>10%</span> damage reduction for <span class='text-blue'>15</span> seconds and stacks up to <span class='text-blue'>3</span> times. Switching to axe form converts all Strong Shield stacks to Sharp Axe stacks, each of which increases damage dealt by <span class='text-blue'>15%</span> for <span class='text-blue'>15</span> seconds. Switching to a different weapon cancels this effect.",
            // 2 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "While in shield form, branch/dodge attacks deal additional damage to targets equal to <span class='text-blue'>4%</span> of the user's current HP.",
            // 4 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "After switching to a shield axe, immediately grant <span class='text-blue'>30%</span> damage reduction that diminishes by <span class='text-blue'>10%</span> every <span class='text-blue'>3<span> seconds, down to a minimum of <span class='text-blue'>10%</span>. Switching weapons cancels this effect. Cooldown: <span class='text-blue'>30</span> seconds.",
            // 6 star
            "Enhance conversion skills.<br>Shield Enhancement: Increase damage dealt by <span class='text-blue'>60%</span> and expand the radius of the flame zome by <span class='text-blue'>30%</span>.<br>Axe Enhancement: For the next <span class='text-blue'>5</span> seconds after using this ability, turn all damage received into HP (up to a maximum of <span class='text-blue'>15%</span> of the user's Max HP)."
        ],
        energyCharge:["10.00","a"],
        shieldBreak:["10.00","a"],
        materials:["fire","green","blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/huma.png",
        chipEffect:[
            // 2 set
            "After the dodge skill hits a target, applies bleed, causing 15%/19%/22.5%/26% * attack damage per sec for 5 sec.",
            // 4 set
            "Attack power of the target affected by bleed within 8 meters is reduced by 10%/12%/13%/15%."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Huma"',
            // 600 affinity
            "Unlock communication [Acquaintance]",
            // 1200 affininty
            "Huma gains 1 Marker of Fortitude per damage, 1 additional Marker if she takes fire damage, up to 1 per second, up to a total of 12. When releasing a weapon skill, all Markers are consumed and you gain <span class='text-blue'>x0.4%</span> of your life.",
            // 2000 affinity
            "Unlock communication [Echo]",
            // 3000 affinity
            "Unlock communication [Symphony]",
            // 4000 affinity
            "Huma gains 1 Marker of Fortitude per damage, 1 additional Marker if she takes fire damage, up to 1 per second, up to a total of 12. When releasing a weapon skill, all Markers are consumed and you gain <span class='text-blue'>x0.6%</span> of your life."
        ],
        traits: ['Female','167 cm','???','Capricorn','12 Jan'],
        gifts: [
            peppaFigure, '+80',
            
            catFigure, '+60',
            tataCards, '+60',
            ufo, '+60',
            psp, '+60',
            pearl, '+60',
            snowglobe, '+60',
            princeTataFigure, '+60',
            
            chessSet, '+30',
            diary, '+30',
            juicePouch, '+30',
            suit, '+30',
            perfume, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            flowers, '+15',
            photoAlbum, '+15',
            scarf, '+15',
            tradingCard, '+15',
            plant, '+15'
        ],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['huma', 4],
            ['burstingcore', 3],
            ['offensivelogic', 3],
            ['cleanupagreement', 3]
        ]
    }

var karasuma = 
    {
        name:"Crow",
        rarity: "SSR",
        pic:"images/karasuma_nobg.png",
        artwork:"images/art/karasuma.png",
        wepName:"Thunderblades",
        wepImg:"images/wep/karasuma.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will <span class='text-blue'>paralyze</span> targets for <span class='text-blue'>1</span> second and electrify them for <span class='text-blue'>6</span> seconds, negating all buffs and dealing damage equal to <span class='text-blue'>144.00%</span> of ATK. Targets can't receive any buffs for the next <span class='text-blue'>6</span> seconds.",
        awakening:[
            // 1 star
            "Attacking targets from behind increases crit rate of all dual blades attacks by <span class='text-blue'>40%</span>. Attacking an electrified target from behind increases crit rate by <span class='text-blue'>100%</span> and crit damage by <span class='text-blue'>30%</span>.",
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "Increase damage by <span class='text-blue'>30%</span> to targets with less than <span class='text-blue'>60%</span> HP.",
            // 4 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Triggering a Back Attack grants a 100% crit chance for the next <span class='text-blue'>4</span> seconds and increases crit damage by <span class='text-blue'>50%</span>. Cooldown: <span class='text-blue'>10</span> seconds.",
            // 6 star
            "After using a skill, increase volt damage dealt to the target by <span class='text-blue'>20%</span> for <span class='text-blue'>20</span> seconds."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["6.00","b"],
        materials:["electric", "red", "blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/karasuma.png",
        chipEffect:[
            // 2 set
            "Crit damage is increased by 33%/42%/50%/58% against targets below 60% health",
            // 4 set
            "Continuous damage is added during a crit strike, causing 12%/15%/18%/21% attack damage to the target every second for 5 seconds (does not stack)"
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Karasuma"',
            // 600 affinity
            "Unlock communication [Friendship Achieved]",
            // 1200 affininty
            "When not in a group, Crow's damage is increased by 6% and damage taken is reduced by 4%.",
            // 2000 affinity
            "Unlock communication [Happy-go-lucky]",
            // 3000 affinity
            "Unlock communication [Jokes]",
            // 4000 affinity
            "When not in a group, Crow's damage is increased by 10% and damage taken is reduced by 6%. When Crow starts a fight, damage is increased by 12% for 12 seconds."
        ],
        traits: ['Male','162 cm','Astra','Sagittarius','17 Dec'],
        gifts: [
            tataCards, '+80',
            tataFigure, '+80',
            
            goldCoin, '+60',
            catFigure, '+60',
            miaFigure, '+60',
            peppaFigure, '+60',
            bearFigure, '+60',
            psp, '+60',
            linyeFigure, '+60',
            
            suit, '+30',
            juicePouch, '+30',
            perfume, '+30',
            pumpkinFigure, '+30',
            androidFigure, '+30',
            
            flowers, '+15',
            snackBox, '+15',
            scarf, '+15'
        ],
        recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['samir', 4],
            ['karasuma', 2],
            ['peppa', 3],
            ['guardscode', 3]
        ]
    }

var zero = 
    {
        name:"Zero",
        rarity: "SSR",
        pic:"images/zero_nobg.png",
        artwork:"images/art/zero.png",
        wepName:"Negating Cube",
        wepImg:"images/wep/zero.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_support.png",
        wepEffect:"Fully charged weapons will set the target on fire for <span class='text-blue'>8</span> seconds with the next attack, causing ongoing damage of <span class='text-blue'>58.00%</span> of ATK every second. Ignited targets receive <span class='text-blue'>50%</span> efficacy from healing.",
        awakening:[
            // 1 star
            "Deal damage and produce a healing orb, which lasts for <span class='text-blue'>20</span> seconds and restore HP of any teammate who picks it up equal to <span class='text-blue'>60%</span> of ATK. <span class='text-blue'>2</span>-second cooldown.",
            // 20% chance of generating a healing sphere when dealing damage, lasts 20 seconds and restores 60% of attack power as health to the player who picks up the healing sphere.
            
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "Reduce skill cooldown from <span class='text-blue'>90</span> seconds to <span class='text-blue'>45</span> seconds. Restore HP equal to <span class='text-blue'>30%</span> of ATK every second while the shield is active.",
            // 4 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Deal damage and produce a damage orb, which lsts for <span class='text-blue'>20</span> seconds and increases ATK of any teammate who picks it up by <span class='text-blue'>1.5%</span>. Stacks up to <span class='text-blue'>10</span> times and lasts for <span class='text-blue'>45</span> seconds. <span class='text-blue'>2.5</span>-second cooldown.",
            // 2% IN CHINA
            
            // 6 star
            "Using an ability grants allies healing orbs and damage orbs equal to the number of Omnium Cubes."
        ],
        energyCharge:["13.00","s"],
        shieldBreak:["5.00","b"],
        materials:["fire","green","blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/zero.png",
        chipEffect:[
            // 2 set
            "When you release a combo, you gain a shield of 120%/150%/180%/210% of your attack power for 4 seconds.",
            // 4 set
            "Increases the damage dealt by yourself and your teammates by 16%/20%/24%/28% during the shield period"
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Zero"',
            // 600 affinity
            "Unlock communication [Unintelligible Dialogue]",
            // 1200 affininty
            "Zero reduces the cooldown of gadgets by <span class='text-blue'>1.5s</span> when releasing a weapon skill.",
            // 2000 affinity
            "Unlock communication [Rules]",
            // 3000 affinity
            "Unlock communication [Zero]",
            // 4000 affinity
            "Zero reduces the cooldown of gadgets by <span class='text-blue'>3s</span> when releasing a weapon skill."
        ],
        traits: ['Male','155 cm','Bengis','Gemini','6 Jun'],
        gifts: [
            psp, '+80',
            
            goldCoin, '+60',
            tataCards, '+60',
            pearl, '+60',
            catFigure, '+60',
            ufo, '+60',
            tataFigure, '+60',
            
            chessSet, '+30',
            diary, '+30',
            
            tradingCard, '+15',
            snackBox, '+15'
        ],
        recChips: [
            ['samir', 4],
            ['coco', 2],
            ['coco', 4],
            ['peppa', 3],
            ['burstingcore', 3]
        ]
    }

var marc = 
    {
        name:"Marc",
        rarity: "SSR",
        pic:"images/marc_nobg.png",
        artwork:"images/art/marc.png",
        wepName:"Breaking Dawn",
        wepImg:"images/wep/marc.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"Fully charged weapons will inflict damage equal to <span class='text-blue'>137.00%</span> of ATK with the next attack, and make the target grievous for <span class='text-blue'>7</span> seconds, taking <span class='text-blue'>20%</span> extra damage.",
        exclusiveEffect:"In group status (Guardian): When releasing Re-entry, Form Switch or Full Shot, it will damage a friendly player with the lowest life for 60% for 10 seconds, and restore 10% of lost blood after the damage. The effect will not be removed and cannot be triggered again until the end of time. When not in a team (increase): 50% physical damage reduction in Heavy Form. Heavy Dimensional Shield: 1 point of Heavy Dimensional Energy is awarded for Heavy Dimensional Punch/Double Slash/Impact Slash hits. Converts 20% of your current life into 1.5 times your maximum life (up to 1.5 times your maximum life, healing is reduced by 50%), shield lasts 15 seconds, cannot be gained if you are below 10% of your life. At the end of the shield, 66.7% of the remaining shield value is converted to life, and 2 points of energy are gained on a hit to a weakened target. (Heavy Shield) is gained by converting other life shield values into (Heavy Shield) and is immune to life shield additions.",
        awakening:[
            // 1 star
            "Immediately gains [Heavy Shield] when releasing Heavy Dimensional Entry, Form Switch or Full Shot",
            // 2 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "1 level of 35% final damage boost at the end of [Heavy Shield] and when it breaks and refreshes. Lasts for 20 seconds, does not stack ",
            // 4 star
            "Increase the current weapon's base HP growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "[Heavy Shield] deals (160%*Current Attack + 5%*Loss of Life) damage to nearby targets at the end of [Heavy Shield] when it breaks and refreshes, and gains 50 weapon charge points on hit. ",
            // 6 star
            "Physical resistance is increased by 1x during [Heavy Shield] with a Heavily Wounded effect, and [Heavy Shield] is also obtained when another weapon's skill hits the target during [Heavy Shield] or when using a combo."
        ],
        energyCharge:["12.00","s"],
        shieldBreak:["9.00","a"],
        materials:["physical","red","black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/marc.png",
        chipEffect:[
            // 2 set
            "Adds a life shield of 15% of your current HP to all teammates after  attacking an enemy for 15 seconds, resetting 10 seconds after you leave the battle. If other life shields are present, all shield values are combined. Damage is reduced by 11%/13%/15%/17% for 15 seconds and is not stackable. This effect is also active in the background, and is effective for multiple sets up to the maximum star level. ",
            // 4 set
            "Increases attack power by 6%/7.5%/9%/11.5% and teammates attack power by 3%/3.5%/4.5%/5.75% for 15 seconds when life shield is granted, stacks up to 3 levels. This will effect is also active in the background, with multiple sets of equipment taking effect up to the maximum star level."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Marc"',
            // 600 affinity
            "Unlock communication [Doomsday Hunters]",
            // 1200 affininty
            "When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'revived' and taunts the surrounding enemies for 5 seconds. While 'revived', you do not take damage, but you cannot perform actions, while recovering <span class='text-blue'>1%</span> of his maximum life every second and healing received is increased by <span class='text-blue'>20%</span>. This effect has a cooldown of <span class='text-blue'>10</span> minutes. Damage from Stinging Eel and Ground Roar is reduced by 50%.",
            // 2000 affinity
            "Unlock communication [Reality and the Law]",
            // 3000 affinity
            "Unlock communication [Thinking about the present]",
            // 4000 affinity
            "When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'Nirvana' and taunts the surrounding enemies for 5 seconds. While in 'Nirvana', you do not take damage, but you cannot perform actions, while recovering <span class='text-blue'>2%</span> of his maximum life every second and healing received is increased by <span class='text-blue'>50%</span>. This effect has a cooldown of <span class='text-blue'>5</span> minutes. Damage from Stinging Eel and Ground Roar is reduced by 50%."
        ],
        traits: ['Male','192 cm','???','???','???'],
        gifts: [
            
            kitchenware, '+60',
            present, '+60',
            pearl, '+60',
            bearFigure, '+60',
            
            toolbox, '+30',
            strangeFragment, '+30',
            
            dumbbells, '+15',
        ],
        recChips: [
            ['marc', 2],
            ['marc', 4],
            ['king', 2],
            ['shiro', 2],
            ['arrogantprovocation', 3],
            ['cleanupagreement', 3]
        ]
    }

var nemesis = 
    {
        name:"Nemesis",
        rarity: "SSR",
        pic:"images/nemesis_nobg.png",
        artwork:"images/art/nemesis.png",
        wepName:"Enlightenment",
        wepImg:"images/wep/nemesis.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_support.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will <span class='text-blue'>paralyze</span> targets for <span class='text-blue'>1</span> second and electrify them for <span class='text-blue'>6</span> seconds, negating all buffs and dealing damage equal to <span class='text-blue'>144.00%</span> of ATK. Targets can't receive any buffs for the next <span class='text-blue'>6</span> seconds.",
        exclusiveEffect:"electric resonance; triggered by equipping 2 or more electric weapons, boosts electric attack by 20% and electric resistance by 40%, also effective on the backstage.",
        awakening:[
            // 1 star
            "When releasing the weapon skill or QTE skill, creates 1 electrode and immediately gains 5 levels of healing chain reinforcement, and releases a healing chain that heals nearby friendly units (= 135% of the Pathfinder's attack power). The healing chain heals nearby units (= 135%*attack).",
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "The electrode releases a ring every 6 seconds, dealing up to 389%*Attack of ranged damage.",
            // 4 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "After releasing the weapon skill, it increases its own electric attack by (10+its own electrode number*10)% for 25 seconds.",
            // 6 star
            "Up to 2 electrodes are present at the same time. When a new electrode appears, it replaces the one at a greater distance from you."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["6.00","b"],
        materials:["electric","green","blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/nemesis.png",
        chipEffect:[
            // 2 set
            "When healing a target, the healed target's electric attack power is increased by 15%/18%/21%/25% for 20 seconds, non-stackable, only the highest level is in effect when repeated.",
            // 4 set
            "When healing yourself or your own electrodes, the healed target gains a electric Strike which gives the next attack within 30 seconds an extra damage boost of 300%/375%/450%/525% electric damage to the first target hit. The electric damage (half the damage caused by  electrodes), can only be casted with an interval of not less than 10 seconds. The electric Strike mechanism is not stackable, and only the highest level is in effect when repeatedly acquired."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Nemesis"',
            // 600 affinity
            "Unlock communication [New Life and Symbiosis]",
            // 1200 affininty
            "When an electrode is summoned, all enemies within 30 metres of the electrode take <span class='text-blue'>60%</span> electric damage and all allies (including yourself) are healed for <span class='text-blue'>120%</span> of their attack power.",
            // 2000 affinity
            "Unlock communication [Experimental Operation]",
            // 3000 affinity
            "Unlock communication [Ahead of the Righteous Eye]",
            // 4000 affinity
            "When an electrode is summoned, all enemies within 30 metres of the electrode take <span class='text-blue'>100%</span> electric damage and all allies (including yourself) are healed for <span class='text-blue'>200%</span> of their attack power."
        ],
        traits: ['Female','165 cm','???','Gemini','25 May'],
        gifts: [
            peppaFigure, '+80',
            princeTataFigure, '+80',
            
            tataCards, '+60',
            present, '+60',
            snowglobe, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            
            tataPlush, '+30',
            suit, '+30',
            catPlush, '+30',
            perfume, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            robotFigure, '+30',
            bunnyDoll, '+30',
            
            flowers, '+15',
            photoAlbum, '+15',
            plant, '+15',
            scarf, '+15',
            pinwheel, '+15',
        ],
        recChips: [
            ['nemesis', 2],
            ['nemesis', 4],
            ['coco', 2],
            ['coco', 4],
            ['guardscode', 3]
        ]
    }

var frigg = 
    {
        name:"Frigg",
        rarity: "SSR",
        pic:"images/frigg_nobg.png",
        artwork:"images/art/frigg.png",
        wepName:"Ice Balmung",
        wepImg:"images/wep/frigg.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will <span class='text-blue'>freeze</span> the target for <span class='text-blue'>2</span> seconds and leave it frostbitten for <span class='text-blue'>6</span> seconds. Breaking the ice shell causes additional damage equal to <span class='text-blue'>151.00%</span> of ATK. While frostbitten, the target's weapon charge rate is reduced by <span class='text-blue'>50%</span>.",
        exclusiveEffect:"After releasing the skill “Fimbulwinter” a large area of ice is formed, inside this area dodges are not consumed up to 3 times? 15% damage increase while in the ice domain. Domain lasts 25s and using the skill again will replace the old one.",
        awakening:[
            // 1 star
            "Gain 1 Ice point for every 550%*Ice Attack of any elemental damage dealt by yourself in the ice area, up to a maximum of 10 ice points. At the end of the Ice area, it will cause explosive field damage to all enemy targets within the ice area with ice value points*95%*ice attack. After leaving the ice area, you lose 1 ice point every 3 seconds.",
            // 2 star
            "+16% increase in HP growth.",
            // 3 star
            "Ice points limit increased to 15, any Ice element weapon attacks released in the ice area deals (+5) *25%* Ice Attack damage to all targets in the ice area.",
            // 4 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Using an ice weapon to break a shield in the ice field freezes the target for 2 seconds and deals an additional 2 ice points*35%*Ice Attack damage (doubled if the target cannot be frozen).",
            // 6 star
            "When you reach 15 Ice Points, you gain an additional Ice Domain (2) buff. When you are in the Ice Domain: your Ice Attack is increased by 25% when using an Ice weapon."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["8.00","a"],
        materials:["ice","red","black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/frigg.png",
        chipEffect:[
            // 2 set
            "When switching from ice weapon to ice weapon, the ice attack power is increased by 15%/18%/21%/25% for 10 seconds. This set also works in the background (when not using the weapon where this set is equipped on), but only the set with the highest star rating will work when  multiple sets are equipped.",
            // 4 set
            "When the ice field is released by the weapon 'Balmung', the enemy targets within the ice field take 60%/75%/90%/105% ice damage per second. "
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Frigg"',
            // 600 affinity
            "Unlock communication []",
            // 1200 affininty
            "When entering combat, gain <span class='text-blue'>+1.5%</span> ice attribute attack power every 3 seconds, stack up to 10 times for <span class='text-blue'>2</span> seconds.",
            // 2000 affinity
            "Unlock communication []",
            // 3000 affinity
            "Unlock communication []",
            // 4000 affinity
            "When entering battle gain <span class='text-blue'>2.4%</span> ice attribute damage every 3 seconds up to 10 stacks, lasts for <span class='text-blue'>5</span> seconds. Immune to CC effects in the ice domain."
        ],
        traits: ['Female','190 cm','???','Aquarius','1 February'],
        gifts: [
            present, '+60',
            tataCards, '+60',
            pearl, '+60',
            peppaFigure, '+60',
            catFigure, '+60',
            kitchenware, '+60',
            
            juicePouch, '+30',
            suit, '+30',
            toolbox, '+30',
            perfume, '+30',
            strangeFragment, '+30',
            
            flowers, '+15',
            dumbbells, '+15',
            scarf, '+15'
        ],
        recChips: [
            ['samir', 2],
            ['karasuma', 2],
            ['samir', 4],
            ['frigg', 4],
            ['transportthinking', 3]
        ]
    }

var ruby = 
    {
        name:"Ruby",
        rarity: "SSR",
        pic:"images/ruby_nobg.png",
        artwork:"images/art/ruby.png",
        wepName:"White Rabbit",
        wepImg:"images/wep/ruby.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will set the target on fire for <span class='text-blue'>8</span> seconds with the next attack, causing ongoing damage of <span class='text-blue'>58.00%</span> of ATK every second. Ignited targets receive <span class='text-blue'>50%</span> efficacy from healing.",
        exclusiveEffect:'Fire Resonance; triggered by equipping 2 or more fire element weapons, boosts fire attack by 20% and fire resistance by 40%, can take effect after equipping them in the background',
        awakening:[
            // 1 star
            "[Scorching Heat] increases Sparky's attack damage to 182%; skill cooldown is reduced to 24 seconds.",
            // 2 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>16%</span>.",
            // 3 star
            "[Scorching Heat] Incidental fire damage increased by 18%; scorch settlement multiplier increased to 150%",
            // 4 star
            "Increase the current weapon's base ATK growth by <span class='text-blue'>32%</span>.",
            // 5 star
            "Each time Sparky's basic attack hits an enemy unit, it returns an additional 75 points to the weapon's charge value, and the cooldown will be 0.9 seconds; during [Ultimate Heat], the efficiency of shield breaking is increased by 25%. ",
            // 6 star
            "[Scorching Heat] increases Sparky's attack damage to 240%, and [Heat] doubles the efficiency; skill cooldown is reduced to 16 seconds."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["11.50","s"],
        materials:["fire","green","blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/ruby.png",
        chipEffect:[
            // 2 set
            "After releasing weapon skill, fire attack is increased by  15%/18%/21%/25% for 25 seconds, the effect is triggered by different star levels, the effect is not stackable",
            // 4 set
            "After releasing the weapon skill, gain (mastery) for 15 seconds, cooldown 15 seconds (different of levels (mastery) shares the cooldown), (mastery) cannot be stacked. Each time the basic attack hits the target, the fire damage is increased by 4%/5%/6%/7% which lasts until the end of (mastery), stacks up to 6 levels, adding up to 1 level every 0.2 seconds, after 6 levels are added, you get a shield to resist 1 damage."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar ',
            // 600 affinity
            "Unlock communication ",
            // 1200 affininty
            "Within 5 meters of Dolly, monsters receive 8% more fire damage, not stackable",
            // 2000 affinity
            "Unlock communication ",
            // 3000 affinity
            "Unlock communication ",
            // 4000 affinity
            "Within 5 meters of Dolly, monsters receive 8% more fire damage, not stackable; after throwing Dolly, the fire attack increases for 10 seconds, not stackable"
        ],
        traits: ['Female','140 cm','???','Cancer','15 July'],
        gifts: [
            princeTataFigure, '+80', // prince tata figure
            
            pearl,'+60',
            ufo,'+60', 
            present,'+60', 
            psp,'+60',  
            linyeFigure,'+60',  
            foxFigure,'+60', 
            
            bunnyDoll,'+40',
            
            diary,'+30',
            catPlush,'+30',
            chessSet,'+30',
            strangeFragment,'+30',
            robotFigure,'+30',
            tataPlush,'+30',
            
            pinwheel,'+15',
            strangePlant,'+15',
            tradingCard,'+15',
        ],
        recChips: [
            ['ruby', 2],
            ['ruby', 4],
            ['samir', 2],
            ['hane', 2],
            ['karasuma', 2],
            ['sobek', 3]
        ]
    }




var bailing = 
    {
        name:"Bai Ling",
        rarity: "SR",
        pic:"images/bailing_nobg.png",
        artwork:"images/art/bailing.png",
        wepName:"Nightingale's Feather",
        wepImg:"images/wep/bailing.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will inflicted 'Heavily Wounded' on enemies for 7 seconds. Enemies will receive 20% extra damage, and deals (100% x ATK) damage.",
        awakening:[
            // 1 star
            "The fifth hit of a normal attack or when using weapon skill, restores one dodge.",
            // 2 star
            "+10% to the base attack growth of the current weapon.",
            // 3 star
            "+30% increase in headshot damage.",
            // 4 star
            "+20% to the base attack growth of the current weapon.",
            // 5 star
            "A dodge attack applies Heavily Wounded to the target for 7 seconds.",
            // 6 star
            "+30% crit rate and +50% higher crit damage to Heavily Wounded targets."
        ],
        energyCharge:["10.00","a"],
        shieldBreak:["6.00","b"],
        materials:["physical", "green", "blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/bailing.png",
        chipEffect:[
            //
            "",
            // 3 set
            "12%/15%/18% increase in damage to heavily injured targets"
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When Bai Ling retracts her Jetpack or Jet Skis, her movement speed is increased by <span class='text-blue'>8%</span> for 12 seconds, with a cooldown time of 60 seconds",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Bai Ling retracts her Jetpack or Jet Skis, her movement speed is increased by <span class='text-blue'>15%</span> for 12 seconds, with a cooldown time of 60 seconds"
        ],
        traits: ['Female','163 cm','HT201 Sanctuary','Taurus','8 May'],
        gifts: [
            snowglobe, '+80',
            seal, '+80',
            
            miaFigure, '+60',
            goldCoin, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            ufo, '+60',
            peppaFigure, '+60',
            kitchenware, '+60',
            princeTataFigure, '+60',
            linyeFigure, '+60',
            
            necklace, '+30',
            vial, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            photoAlbum, '+15',
            harmonica, '+15',
            photo, '+15',
            plant, '+15',
            strangePlant, '+15'
        ],
        recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['karasuma', 2],
            ['peppa', 3],
            ['arrogantprovocation', 3]
        ]
}

var hilda = 
    {
        name:"Hilda",
        rarity: "SR",
        pic:"images/hilda_nobg.png",
        artwork:"images/art/hilda.png",
        wepName:"The Terminator",
        wepImg:"images/wep/hilda.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"The next attack freezes the enemy for 2 seconds when the weapon is fully charged and causes frostbite for 6 seconds, and deals 111.00%*attack damage when the freeze breaks.The target's weapon recharge speed will be reduced by 50% during frostbite.",
        awakening:[
            // 1 star
            "Each hit on a normal attack increases damage by 1% for 2 seconds, stacking up to 15 levels, and increases the number of ammunition rounds to 60.",
            // 2 star
            "+10% to the base attack growth of the current weapon.",
            // 3 star
            "+30% increase in damage and shield breaking for 10 seconds after switching to this weapon, 25 seconds cooldown time and increases the number of ammunition rounds to 80.",
            // 4 star
            "+20% to the base attack growth of the current weapon.",
            // 5 star
            "Cooldown time for normal attack in turret form is reduced to 2 seconds. ",
            // 6 star
            "+60% increase in normal attack damage and shield breaking efficiency for 10 seconds after switching to this weapon, 25 seconds cooldown time."
        ],
        energyCharge:["10.00","a"],
        shieldBreak:["10.00","a"],
        materials:["ice","red","blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/hilda.png",
        chipEffect:[
            //
            "",
            // 3 set
            "Attack power is increased by 15%/19%/22.5% when no enemy unit is within 6 meters."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "Hilda's movement speed is increased by <span class='text-blue'>7%</span> when riding on a mount",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "Hilda's movement speed is increased by <span class='text-blue'>10%</span> when riding on a mount"
        ],
        traits: ['Female','165 cm','???','Aries','11 Apr'],
        gifts: [
            tataFigure, '+80',
            
            goldCoin, '+60',
            tataCards, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            bearFigure, '+60',
            miaFigure, '+60',
            present, '+60',
            psp, '+60',
            princeTataFigure, '+60',
            linyeFigure, '+60',
            
            tataPlush, '+30',
            catPlush, '+30',
            robotFigure, '+30',
            pumpkinFigure, '+30',
            androidFigure, '+30',
            bunnyDoll, '+30',
            
            pinwheel, '+15',
            snackBox, '+15'
        ],
        recChips: [
            ['samir', 2],
            ['king', 2],
            ['shiro', 2],
            ['peppa', 3],
            ['transportthinking', 3],
            ['offensivelogic', 3]
        ]
}

var manaka = 
    {
        name:"Echo",
        rarity: "SR",
        pic:"images/manaka_nobg.png",
        artwork:"images/art/manaka.png",
        wepName:"Thunderous Halberd",
        wepImg:"images/wep/manaka.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will shock/stun the enemy for 1 second, removing their current buffs and deals 106.00%* attack damage, They cannot gain any buffs for 6 seconds. (Also applies electro charged for 6 seconds)",
        awakening:[
            // 1 star
            "+15% more shield breaking efficiency, +15% more attack for the whole team when the shield is breached, does not stack, lasts 30 seconds.",
            // 2 star
            "+10% base health growth.",
            // 3 star
            "When the weapon skill hits a target, it reduces the target's attack by 5% while increasing your own attack by 5% for 15 seconds, stacks when hitting multiple targets, up to 3 stacks. The effect is doubled when hitting Heavily Wounded targets.",
            // 4 star
            "+20% to the base attack growth of the current weapon.",
            // 5 star
            "Doubles the stun duration of the forward dodge attack.",
            // 6 star
            "The longer the throw distance of the QTE skill, the higher the damage, up to 100% more damage."
        ],
        energyCharge:["7.00","b"],
        shieldBreak:["12.60","s"],
        materials:["electric", "red", "black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/manaka.png",
        chipEffect:[
            //
            "",
            // 3 set
            "Gains 80/100/120 weapon charge points after releasing a combo."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When teaming up with Manaka, all teammates within 10m of Manaka receive a <span class='text-blue'>4%</span> damage boost (excluding yourself).",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When teaming up with Manaka, all teammates within 10m of Manaka receive a <span class='text-blue'>6%</span> damage boost (excluding yourself)."
        ],
        traits: ['Female','162 cm','Warren','Leo','14 Aug'],
        gifts: [
            psp, '+80',
            tataCards, '+80',
            
            goldCoin, '+60',
            ufo, '+60',
            peppaFigure, '+60',
            catFigure, '+60',
            pearl, '+60',
            tataFigure, '+60',
            
            chessSet, '+30',
            suit, '+30',
            juicePouch, '+30',
            diary, '+30',
            perfume, '+30',
            
            flowers, '+15',
            snackBox, '+15',
            tradingCard, '+15',
            harmonica, '+15',
            scarf, '+15'
        ],
        recChips: [
            ['samir', 2],
            ['king', 2],
            ['shiro', 2],
            ['guardscode', 2],
            ['offensivelogic', 2]
        ]
}

var peppa = 
    {
        name:"Pepper",
        rarity: "SR",
        pic:"images/peppa_nobg.png",
        artwork:"images/art/peppa.png",
        wepName:"Staff of Scars",
        wepImg:"images/wep/peppa.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_support.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will shock/stun the enemy for 1 second, removing their current buffs and deals 106.00%* attack damage, They cannot gain any buffs for 6 seconds. (Also applies electro charged for 6 seconds)",
        awakening:[
            // 1 star
            "Heals all teammates within 10 metres of the weapon when the dodge attack is released, healing 100 % of the attack.",
            // 2 star
            "+10% base health growth.",
            // 3 star
            "Two missiles are fired to each normal attack, each dealing 5% attack damage to the target and gaining 5 points of weapon power.",
            // 4 star
            "+20% base health growth.",
            // 5 star
            "20% increase in weapon recharge rate. (Missile attacks do not receive this bonus) ",
            // 6 star
            "The skill removes crowd control effects from the target and gives 60% damage reduction to friendly units within the range of the skill."
        ],
        energyCharge:["10.00","a"],
        shieldBreak:["4.00","b"],
        materials:["electric", "red", "black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/peppa.png",
        chipEffect:[
            //
            "",
            // 3 set
            "Increase the speed of acquiring weapon recharge by 10%/12.5%/15%."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When Peppa uses satiety (Hunger) to restore life, the recovery effect is increased by <span class='text-blue'>100%</span>",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Peppa uses satiety (Hunger) to restore life, the recovery effect is increased by <span class='text-blue'>200%</span>"
        ],
        traits: ['Female','160 cm','Bengis','Cancer','9 Jul'],
        gifts: [
            peppaFigure, '+80',
            
            seal, '+60',
            tataCards, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            goldCoin, '+60',
            snowglobe, '+60',
            kitchenware, '+60',
            princeTataFigure, '+60',
            linyeFigure, '+60',
            
            suit, '+30',
            juicePouch, '+30',
            necklace, '+30',
            perfume, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            photoAlbum, '+15',
            flowers, '+15',
            plant, '+15',
            scarf, '+15',
            strangePlant, '+15'
        ],
        recChips: [
            ['coco', 2],
            ['coco', 4],
            ['peppa', 3],
            ['guardscode', 3],
            ['cleanupagreement', 3],
        ]
}

var xi = 
    {
        name:"Ene",
        rarity: "SR",
        pic:"images/xi_nobg.png",
        artwork:"images/art/xi.png",
        wepName:"Pummeler",
        wepImg:"images/wep/xi.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"The next attack freezes the enemy for 2 seconds when the weapon is fully charged and causes frostbite for 6 seconds, and deals 111.00%*attack damage when the freeze breaks.The target's weapon recharge speed will be reduced by 50% during frostbite.",
        awakening:[
            // 1 star
            "Taunts nearby enemies when switching to this weapon, and gains invulnerability for 1 hit (lasts 4 seconds) and gain super armor (lasts 8 seconds). 15 seconds cooldown.",
            // 2 star
            "+10% base health growth.",
            // 3 star
            "Damage received is reduced by 50% after taking damage, for the next 6 seconds, cooldown 20 seconds. ",
            // 4 star
            "+20% base health growth.",
            // 5 star
            "Apply 2.5 seconds stun effect on normal attacks, 20 seconds cooldown.",
            // 6 star
            "QTE skill makes target take 10% more damage and if it's Ice damage, increases damage by another 10% for 25 seconds."
        ],
        energyCharge:["6.00","b"],
        shieldBreak:["10.00","a"],
        materials:["ice","green","black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/xi.png",
        chipEffect:[
            //
            "",
            // 3 set
            "When causing damage higher than 100% attack power, an additional 60%/75%/90%* attack damage will be reconstituted, and the cooldown is 3 seconds"
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "Reduces stamina consumption by <span class='text-blue'>12%</span> when swimming, climbing or gliding.",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "Reduces stamina consumption by <span class='text-blue'>20%</span> when swimming, climbing or gliding."
        ],
        traits: ['Female','145 cm','Crown','Leo','17 Aug'],
        gifts: [
            princeTataFigure, '+80',
            
            peppaFigure, '+60',
            ufo, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            present, '+60',
            psp, '+60',
            pearl, '+60',
            snowglobe, '+60',
            
            chessSet, '+30',
            diary, '+30',
            catPlush, '+30',
            tataPlush, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            robotFigure, '+30',
            bunnyDoll, '+30',
            
            photoAlbum, '+15',
            tradingCard, '+15',
            pinwheel, '+15',
            plant, '+15'
        ],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['transportthinking', 2],
            ['offensivelogic', 2],
            ['cleanupagreement', 2],
        ]
}

// Chip exclusives
var roberag = {
    name:"Roberag",
    rarity:"SR",
    chipImg:"images/chip/roberag.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Poison the target when breaking shields, dealing 45%/56%/67.5%"
        ]
}
var apophis = {
    name:"Apophis",
    rarity:"SR",
    chipImg:"images/chip/apophis.png",
    chipEffect:[
            //
            "",
            // 3 set
            "The lower your health, the more damage you can do, at 20% health, the maximum value is reached and the maximum damage increased by 20%/25%/30%."
        ]
}
var frozenmech = {
    name:"Frozen Mech",
    rarity:"SR",
    chipImg:"images/chip/frozenmech.png",
    chipEffect:[
            //
            "",
            // 3 set
            "When the health is lower than 40%, cast a combo technique to restore the health value of 160%/200%/240% of the attack power."
        ]
}
var sobek = {
    name:"Sobek",
    rarity:"SR",
    chipImg:"images/chip/sobek.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Increases damage by 6%/7.5%/9% for each enemy unit that is around, up to 3 levels."
        ]
}
var barbarossa = {
    name:"Barbarossa",
    rarity:"SR",
    chipImg:"images/chip/barbarossa.png",
    chipEffect:[
            //
            "",
            // 3 set
            "when switching to (this) weapon, get 50%/62.5%/75% counter damage that last for 3 seconds, cool down for 30 seconds; when switch to other weapons, get 20%/25%/30% damage increase, lasting 5 seconds, with a cooldown time of 30 seconds."
        ]
}
var burstingcore = {
    name:"Bursting Core",
    rarity:"R",
    chipImg:"images/chip/burstingcore.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Fire weapon damage increased by 6%"
        ]
}
var transportthinking = {
    name:"Transport Thinking",
    rarity:"R",
    chipImg:"images/chip/transportthinking.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Ice weapon damage increased by 6%"
        ]
}
var guardscode = {
    name:"Guard's Code",
    rarity:"R",
    chipImg:"images/chip/guardscode.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Electricity weapon damage increased by 6%"
        ]
}
var arrogantprovocation = {
    name:"Arrogant Provocation",
    rarity:"R",
    chipImg:"images/chip/arrogantprovocation.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Physical weapon damage increased by 6%"
        ]
}
var cleanupagreement = {
    name:"Cleanup Agreement",
    rarity:"R",
    chipImg:"images/chip/cleanupagreement.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Damage taken reduced by 6%"
        ]
}
var offensivelogic = {
    name:"Offensive Logic",
    rarity:"SR",
    chipImg:"images/chip/offensivelogic.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Shield breaking efficiency increased by 18%"
        ]
}



var gadgets = [
    
    // SSR Giant arms
    {
        name: "Colossus Arms",
        description: "Uses the arms to fight for 20 seconds, cooldown 300 seconds, immune to hardness, click again to cancel. Deals a total of 1,387.7% attack damage from normal attacks; 453.5% attack damage from skills which has a 10 sec cooldown.",
        awakening: [
            // 1 star
            "Each attack shoots 2 missiles at the target, each dealing 34.8% attack damage.",
            // 2 star
            "Cooldown reduced to 200 seconds.",
            // 3 star
            "4 missiles can be fired per attack to deal damage to the target, each missile deals 34.8% attack damage.",
            // 4 star
            "Reduces physical damage by 2%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "Giant Arm lasts for 30 seconds, all damage taken is reduced by 20% for the duration."
        ],
        pic: "images/gadget/giantarms.png",
        rarity:"SSR"
    },
    
    // SSR Atomic Shield
    {
        name: "Omnium Shield",
        description: "A shield of raw energy is assembled for 10 seconds, blocking bullet penetration. The shield has 200% of the Pioneer's maximum life and has a cooldown of 90 seconds.",
        awakening: [
            // 1 star
            "If an enemy target passes through the shield, the speed is reduced by 50% for 2 seconds.",
            // 2 star
            "Cooldown time reduced to 60 seconds",
            // 3 star
            "Duration extended to 20 seconds",
            // 4 star
            "Reduces ice damage taken by 2%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "You and friendly team-members will receive a 25% damage boost for 7 seconds when they pass through the energy shield."
        ],
        pic: "images/gadget/atomicshield.png",
        rarity:"SSR"
    },
    
    // SSR V-Mech
    {
        name: "Type V Armor",
        description: "Drive a robot into battle, lasts 30 seconds, cooldown 200 seconds. Immune to hardness, click again to cancel. V-Mech possesses the skill: Aimed Shot. Aimed Shot: Fires flaming bullets at high frequency, dealing 44.4%*attack damage per hit.",
        awakening: [
            // 1 star
            "Immune to fire damage and crowd control when driving the mech.",
            // 2 star
            "Gains new skill: 'Barrage': Fires 6 barrages at the target, dealing 155.2%*attack damage per hit.",
            // 3 star
            "Add Burning effect when driving a mech.",
            // 4 star
            "Increases fire element damage by 2%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "New skill: 'Flame Field': Releases a large flame field in place, dealing up to 1146.8%* attack damage"
        ],
        pic: "images/gadget/vmech.png",
        rarity:"SSR"
    },
    
    // SSR Time Rift
    {
        name: "Spacetime Rift",
        description: "Using a proton bomb, it collapses the space in front of it and continues to attract targets within its range for 10 seconds, After a delay of 1.5 seconds, dealing 39.6%*attack damage every 0.5 seconds to the central area, with a cooldown time of 100 seconds.",
        awakening: [
            // 1 star
            "Enemies in the collapsed space cannot use dodge, and the absorption time is extended to 15 seconds.",
            // 2 star
            "Damage range is increased by a factor of 1.",
            // 3 star
            "20% more damage to targets in the area.",
            // 4 star
            "Reduces fire elemental damage by 2%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "Enemy units in the collapsed space cannot be healed."
        ],
        pic: "images/gadget/timerift.png",
        rarity:"SSR"
    },
    
    // SSR Confined Space
    {
        name: "Confinement",
        description: "Creates a confined space with a radius of 7m for 10 seconds, with constant energy fluctuations on the ground, dealing 73.4%*Attack of the current weapon elemental damage per second to ground targets; if the target touches the edge of the area, a strong control stun effect is applied for 2 seconds, with a cooldown of 240 seconds.",
        awakening: [
            // 1 star
            "Stun extended to 3 seconds, cooldown reduced to 180 seconds.",
            // 2 star
            "Energy Wave deals an additional 30% more damage.",
            // 3 star
            "Cooldown time reduced to 120 seconds.",
            // 4 star
            "Increases physical damage by 2%, even when not in combat, but not in peak leagues",
            // 5 star
            "Extra seismic waves are triggered every 3 seconds, every hit floats the targets (can be dodged by jumping)."
        ],
        pic: "images/gadget/confinedspace.png",
        rarity:"SSR"
    },
    
    // SSR Drone
    {
        name: "Drone",
        description: "Summons a drone for 15 seconds, increases your final damage by 5% every 5 seconds, cooldown 120 seconds.",
        awakening: [
            // 1 star
            "Apply crowd control immunity for the first 5 seconds.",
            // 2 star
            "Duration extended to 25 seconds.",
            // 3 star
            "Adds an additional 5% damage boost to the Pioneer every 5 seconds.",
            // 4 star
            "Adds an additional 5% damage boost to the Pioneer every 5 seconds.",
            // 5 star
            "During the duration of the drone, the Pioneer receives an attack recovery effect, converting 20% of the damage value to its own life."
        ],
        pic: "images/gadget/drone.png",
        rarity:"SSR"
    },
    
    // SSR Holographic Projection
    {
        name: "Hologram Projector",
        description: "Unleashes a holographic projection based on yourself, which synchronises with the character's weapon attacks and deals 50% of the damage dealt by the character for 15 seconds, with a cooldown of 180 seconds.",
        awakening: [
            // 1 star
            "Duration extended to 20 seconds.",
            // 2 star
            "Projection damage is increased to 75% of the character's damage.",
            // 3 star
            "Click again to shift yourself to the position of the projection.",
            // 4 star
            "Increases electric damage by 2%, even if you are not in combat, but not in the peak league (PvP)",
            // 5 star
            "Projected damage is increased to 100% of the character's damage, and you are self-controlled when shifting."
        ],
        pic: "images/gadget/holographicprojection.png",
        rarity:"SSR"
    },
    
    // SSR Death Suppressor
    {
        name: "Alternate Destiny",
        description: "Creates a space that lasts for 8 seconds, in which you have the effect of hegemony and you cannot go lower than 20% of your health regardless of any damage you take, with a cooldown time of 90 seconds. After 8 seconds in space, you cannot regain the same space effect for 45 seconds.",
        awakening: [
            // 1 star
            "After 8 seconds, you regain 15% of your health in the space.",
            // 2 star
            "Adds a 25% blood-suck effect while in space.",
            // 3 star
            "Immune to all controls while in space.",
            // 4 star
            "Increases ice damage by 2%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "When you are below or equal to 40% of your life in space, your blood-suck effect is doubled until the space disappears."
        ],
        pic: "images/gadget/deathsuppressor.png",
        rarity:"SSR"
    },
    
    // SSR Counter 2
    {
        name: "Couant 2",
        description: "Gain a shield that lasts for 5 seconds. After 1 attack it disappears, knocking surrounding enemies and deal 100% of attack power+50 points of damage. When the shield is broken within 1 second of generating, it stuns the enemy for 2 seconds and you will receive a damage boost by a percentage of your current life for 10 seconds (up to 60%).",
        awakening: [
            // 1 star
            "Immediately gain 100 energy if your HP is more than 90%. Immediately gain 50 energy if your HP is less than 90%. Immediately gain another 50 energy when the damage boost ends.",
            // 2 star
            "Damage booster time is increased by 1 second.",
            // 3 star
            "Increase the damage boost limit to 70%",
            // 4 star
            "Increases fire damage by 2%, even if you are not in combat, but not in Apex league (PvP)",
            // 5 star
            "If the HP loss is greater than the current HP loss, the damage increase is based on the percentage of HP lost (up to 70%)."
        ],
        pic: "images/gadget/counter2.png",
        rarity:"SSR"
    },
    
    // SR Jetpack 
    {
        name: "Jetpack",
        description: "Press and hold the Jetpack gadget in the direction of the arrow to enter the gliding state. Consumes 10 points of stamina per second. Jetpack cooldown 150 seconds. Stagnant gliding is not affected by the cooldown.Jetpack can be used 2 times before going on cooldown.",
        awakening: [
            // 1 star
            "Cooldown reduced to 100 seconds, gliding does not consume stamina anymore.",
            // 2 star
            "Glide for more than 3 seconds to gain a critical hit enhancement and a strong control state to stun the target for 2 seconds at the moment your Jetpack hits the target.",
            // 3 star
            "Cooldown reduced to 60 seconds.",
            // 4 star
            "Reduces Physical damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "Jetpack can be used up to 3 times."
        ],
        pic: "images/gadget/jetpack.png",
        rarity:"SR"
    },
    
    // SR Quantum Cloak
    {
        name: "Quantum Cloak",
        description: "Enters a quantum state, making yourself invisible to enemies by optical means for 10 seconds. Launching an attack removes this effect and has a 120 second cooldown.",
        awakening: [
            // 1 star
            "Quantum state lasts for 20 seconds.",
            // 2 star
            "Cooldown reduced to 80 seconds.",
            // 3 star
            "100% more damage to attacks launched in Quantum state, this effect is removed after 1 attack.",
            // 4 star
            "Increases electric damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "100% more damage to attacks launched in Quantum state, this effect is removed after 3 attacks."
        ],
        pic: "images/gadget/quantumcloak.png",
        rarity:"SR"
    },
    
    // SR Floating Ice Cannon
    {
        name: "Hovering Cannon",
        description: "Summons a floating ice cannon that lasts for 20 seconds and has a cooldown of 240 seconds. The Floating Cannon has the skill: Laser Beam, which deals 5.6%*attack damage to the target each time.",
        awakening: [
            // 1 star
            "Floating ice cannon lasts for 24 seconds.",
            // 2 star
            "New skill: 'Laser array', freezes the target by damaging it 4 times in a row, dealing up to 93.2%*attack damage to the target.",
            // 3 star
            "Cooldown time reduced to 150 seconds.",
            // 4 star
            "Increases ice damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "New skill: 'Shock', which deals 55.9%*attack damage to the target and stuns the target for 0.5 seconds"
        ],
        pic: "images/gadget/floatingicecannon.png",
        rarity:"SR"
    },
    
    // SR Jet Ski
    {
        name: "Jetboard",
        description: "When used, it dashes forward a distance and slowly decelerates  until it stops, dealing 380% of current attack damage to colliding targets and inflicting a knockback effect during the dash, with a 90-second cooldown. The ability to use the Jet ski is possible while in swimming state.",
        awakening: [
            // 1 star
            "10 weapon points charges per second during glide.",
            // 2 star
            "Cooldown time reduced to 60 seconds.",
            // 3 star
            "100% more damage from Jet skis collisions, cooldown time reduced to 45 seconds.",
            // 4 star
            "Reduces ice damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "Immune to crowd control while using Jet skis, 5-second stun effect on colliding targets"
        ],
        pic: "images/gadget/jetski.png",
        rarity:"SR"
    },
    
    // SR Magnetic Storm
    {
        name: "Magnetic Storm",
        description: "Twisted Magnetic Field, releases 1 whirlwind with an electric core that moves in a random path around the scene for 10 seconds, sweeping surrounding targets into the air, dealing 186.3% of current attack damage per second, cooldown 100 seconds.",
        awakening: [
            // 1 star
            "Releases 2 whirlwinds with electric cores.",
            // 2 star
            "20% more damage to the whirlwind.",
            // 3 star
            "Releases 3 whirlwinds with electric cores.",
            // 4 star
            "Increases electric damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "units in the whirlwind have a 50% chance of being confused for 3 seconds every time they take damage (moving in the opposite direction of the joystick/keybinds)."
        ],
        pic: "images/gadget/magneticstorm.png",
        rarity:"SR"
    },
    
    // SR Multiple Missile
    {
        name: "Missile Barrage",
        description: "Throws a missile launcher behind you for 8 seconds, with a cooldown of 60 seconds. Releases multiple missiles to attack nearby enemy units, each dealing 34.8% of current attack damage.",
        awakening: [
            // 1 star
            "Increases the number of missiles released per second",
            // 2 star
            "20% more damage from Multiple Missile",
            // 3 star
            "Multiple Missile last for 12 seconds.",
            // 4 star
            "Increases Physical damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "the number of missiles released per second is increased again."
        ],
        pic: "images/gadget/multiplemissile.png",
        rarity:"SR"
    },
    
    // SR Shielding Robot
    {
        name: "Couant",
        description: "The summoned robot opens a shield that lasts 5 seconds. The shield disappears after 5 seconds or when you take an attack, knocking back the surrounding enemies and deals 100% attack +50 damage. If the shield is broken within 1 second of being created, it stuns the enemy for an additional 2 seconds. Cooldown time of 30 seconds.",
        awakening: [
            // 1 star
            "When the shield is broken, it reduces the movement speed of the attacker and nearby enemies by 35% for 6 seconds.",
            // 2 star
            "When the shield ends (shattered), the final damage is increased by an equal percentage of the blood lost, for 10 seconds, with a minimum of 30%.",
            // 3 star
            "After the shield ends (shattered), it increases your movement speed by 30% for 5 seconds.",
            // 4 star
            "Reduces fire damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "When the shield is broken, it gains 5 seconds of anti-damage effect, returning 0.6 times the damage taken to the attacker."
        ],
        pic: "images/gadget/shieldingrobot.png",
        rarity:"SR"
    },
    
    // SR Singularity Magic Cube
    {
        name: "Strange Cube",
        description: "Use the Cube to change the gravitational pull around you, causing the enemy to take 100% attack damage, then grab the enemy to make them float and send them flying and deal 120% attack damage again. Cooldown of 30 seconds.",
        awakening: [
            // 1 star
            "When the Cube is activated, increases your damage by 10% for 10 seconds.",
            // 2 star
            "When the Cube is activated, 200 points of weapon charge are deducted from surrounding enemies.",
            // 3 star
            "The number of uses of the Cube is increased to 2.",
            // 4 star
            "Increases elemental damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "When the Cube is activated, the weapon gains power based on the amount of blood lost. For every 1% of blood lost, 10 points of weapon power are gained."
        ],
        pic: "images/gadget/singularitymagiccube.png",
        rarity:"SR"
    },
    
    // SR Atomic Hand Cannon
    {
        name: "Omnium Handcannon",
        description: "Fires 1 mechanical energy projectile at the designated target, hits the ground or water to create a climbable mechanical cylinder for a maximum of 20 seconds. A maximum of 2 projectiles can be used. Each with a cooldown time of 50 seconds.",
        awakening: [
            // 1 star
            "The mechanical projectile of energy is increased to 30 seconds.",
            // 2 star
            "When using the Atomic Hand Cannon, the stamina recovery will be 30% faster for 20 seconds",
            // 3 star
            "Stores up to 3 rounds of ammunition",
            // 4 star
            "1.5% more fire elemental damage, even when not in a combat, but not in peak league (PvP)",
            // 5 star
            "Cooldown time reduced to 40 seconds."
        ],
        pic: "images/gadget/atomichandcannon.png",
        rarity:"SR"
    },
    
    // SR Lava Grenade
    {
        name: "Lava Bomb",
        description: "Throws lava bombs in front of the target, dealing 567% of current attack damage with knockback, 45 sec cooldown.",
        awakening: [
            // 1 star
            "Added 2 seconds stun and ignition on hit.",
            // 2 star
            "50% more blast range.",
            // 3 star
            "Cooldown time reduced to 30 seconds.",
            // 4 star
            "Increases fire damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "3 seconds stun on hit, 10 seconds stamina burn added to target, 100 stamina points deducted per use."
        ],
        pic: "images/gadget/lavagrenade.png",
        rarity:"SR"
    },
    
    // SR Mechanical Arm
    {
        name: "Cybernetic Arm",
        description: "Ejects a robotic arm, pulling a given target to it, or pulling itself to it, causing 100% damage and floating on a hit, while returning 300 points of weapon charge to yourself; can also be used to reach hard-to-reach places, can be used 2 times, restoring 1 charge every 30 seconds.",
        awakening: [
            // 1 star
            "Gives you an electromagnetic shield that reduces your damage taken by 20% for 7 seconds.",
            // 2 star
            "1 recovery every 15 seconds",
            // 3 star
            "can be used up to 3 times.",
            // 4 star
            "Increases ice damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "Reduce 30% of final damage to the target for 7 seconds on hit."
        ],
        pic: "images/gadget/mechanicalarm.png",
        rarity:"SR"
    },
    
    // SR Magneto Pulse
    {
        name: "Magnetic Pulse",
        description: "The Pioneer detonates a magnetic bomb, knocking the target back, dealing 38.8% of current attack damage to the target and making himself immune to hard effects for 5 seconds, with a 35 second cooldown.",
        awakening: [
            // 1 star
            "Can be used while in cc (crowd controlled).",
            // 2 star
            "Immune to crowd control for 5 seconds after use.",
            // 3 star
            "adds a 7-second magnetic bomb to the target after hitting it, which will detonate immediately after the target uses attack/dodge/skill, causing a 40% slow that will disappear after triggering.",
            // 4 star
            "Reduces electric element damage by 1.5%, even if not in combat, but not in peak league (PvP)",
            // 5 star
            "When the target detonates the magnetic bomb, it removes all of the target's current buffs."
        ],
        pic: "images/gadget/magnetopulse.png",
        rarity:"SR"
    }
    
]

var mushroom = {
    name: 'Mushroom',
    imgSrc: 'mushroom.png',
    rarity: 1,
    source: "Found on Astra (around giant mushrooms) and in Crown"
};
var silverperch = {
    name: 'Silver Perch',
    imgSrc: 'silverperch.png',
    rarity: 1,
    source: 'Found in rivers'
}
var wheat = {
    name: 'Wheat',
    imgSrc: 'wheat.png',
    rarity: 1,
    source: 'Found on Astra (meadows) and Banges (meadows)'
}
var meat = {
    name: 'Meat',
    imgSrc: 'meat.png',
    rarity: 1,
    source: 'Obtained by hunting wild animals'
}
var lettuce = {
    name: 'Lettuce',
    imgSrc: 'lettuce.png',
    rarity: 1,
    source: 'Found on Astra (meadows)'
}
var dressing = {
    name: 'Dressing',
    imgSrc: 'dressing.png',
    rarity: 1,
    source: 'Purchased at food vendor'
}
var egg = {
    name: 'Egg',
    imgSrc: 'egg.png',
    rarity: 1,
    source: 'Found in bird nests (high elevations)'
}
var seaweed = {
    name: 'Seaweed',
    imgSrc: 'seaweed.png',
    rarity: 1,
    source: 'Found in Banges (North Sea Beach)'
}
var milk = {
    name: 'Milk',
    imgSrc: 'milk.png',
    rarity: 1,
    source: 'Purchased at food vendor'
}
var drumstick = {
    name: 'Drumstick',
    imgSrc: 'drumstick.png',
    rarity: 1,
    source: 'Obtained by hunting birds'
}
var rice = {
    name: 'Rice',
    imgSrc: 'rice.png',
    rarity: 1,
    source: 'Purchased at food vendor'
}
var tomato = {
    name: 'Tomato',
    imgSrc: 'tomato.png',
    rarity: 2,
    source: 'Found on Astra (around alpine shrubs) and in Navia (around trees)'
}
var hornedconch = {
    name: 'Horned Conch',
    imgSrc: 'hornedconch.png',
    rarity: 2,
    source: 'Found in Bangis (South Sea Beach) and Navia (beach)'
}
var potato = {
    name: 'Potato',
    imgSrc: 'potato.png',
    rarity: 2,
    source: 'Found in Banges (around bushes)'
}
var fruitdrop = {
    name: 'Fruit Drop',
    imgSrc: 'fruitdrop.png',
    rarity: 2,
    source: 'Found on Astra (around trees) and in Banges (around trees)'
}
var honey = {
    name: 'Honey',
    imgSrc: 'honey.png',
    rarity: 2,
    source: 'Obtained from hives and bees'
}
var ghostmushroom = {
    name: 'Ghost Mushroom',
    imgSrc: 'ghostmushroom.png',
    rarity: 2,
    source: 'Found on Astra (Keel, Graveyard)'
}
var broccoli = {
    name: 'Broccoli',
    imgSrc: 'broccoli.png',
    rarity: 2,
    source: 'Found on Astra (meadows)'
}
var dandelion = {
    name: 'Dandelion',
    imgSrc: 'dandelion.png',
    rarity: 1,
    source: 'Obtained from dandelion pom-poms'
}
var sturgeon = {
    name: 'Sturgeon',
    imgSrc: 'sturgeon.png',
    rarity: 2,
    source: 'Found in rivers of Astra, Navia, and Warren'
}
var redwheat = {
    name: 'Red Wheat',
    imgSrc: 'redwheat.png',
    rarity: 2,
    source: 'Found in Navia (meadows)'
}
var fireear = {
    name: 'Fire Ear',
    imgSrc: 'fireear.png',
    rarity: 2,
    source: 'Found in Crown'
}
var blackmoss = {
    name: 'Black Moss',
    imgSrc: 'blackmoss.png',
    rarity: 2,
    source: 'Found in Crown'
}
var seaconch = {
    name: 'Sea Conch',
    imgSrc: 'seaconch.png',
    rarity: 3,
    source: 'Found in Banges (South Sea Beach)'
}
var hindleg = {
    name: 'Hind Leg Meat',
    imgSrc: 'hindleg.png',
    rarity: 3,
    source: 'Obtained by hunting rabbits, mountain hares, boars, bears, wolves, and honey badgers'
}
var shuttlecrab = {
    name: 'Shuttle Crab',
    imgSrc: 'shuttlecrab.png',
    rarity: 3,
    source: 'Found on the beaches of Astra, Banges, and Crown'
}
var strawberry = {
    name: 'Strawberry',
    imgSrc: 'strawberry.png',
    rarity: 3,
    source: 'Found in Navia (around bushes)'
}
var blueberry = {
    name: 'Blueberry',
    imgSrc: 'blueberry.png',
    rarity: 3,
    source: 'Obtained from defeating the Sons of Aida (robotic enemies)'
}
var sparklingwater = {
    name: 'Sparkling Water',
    imgSrc: 'sparklingwater.png',
    rarity: 1,
    source: 'Purchased at food vendor'
}
var seaurchin = {
    name: 'Sea Urchin',
    imgSrc: 'seaurchin.png',
    rarity: 3,
    source: 'Found in Banges (North Sea Beach) and Crown (beach)'
}
var spinach = {
    name: 'Spinach',
    imgSrc: 'spinach.png',
    rarity: 3,
    source: 'Found near the Banges factory'
}
var cocoabeans = {
    name: 'Cocoa Beans',
    imgSrc: 'cocoabeans.png',
    rarity: 3,
    source: 'Found in Navia (Minyu Island)'
}
var balloonfruit = {
    name: 'Balloon Fruit',
    imgSrc: 'balloonfruit.png',
    rarity: 3,
    source: 'Found on Astra and in Navia'
}
var thundereel = {
    name: 'Thunder Eel',
    imgSrc: 'thundereel.png',
    rarity: 3,
    source: 'Found in the rivers of Banges, Navia, and Warren'
}
var hermitcrab = {
    name: 'Hermit Crab',
    imgSrc: 'hermitcrab.png',
    rarity: 3,
    source: 'Found on the beaches of Banges, Navia, and Crown'
}
var pomegranate = {
    name: 'Pomegranate',
    imgSrc: 'pomegranate.png',
    rarity: 3,
    source: 'Found in Navia (around rocks)'
}
var dragonfruit = {
    name: 'Dragon Fruit',
    imgSrc: 'dragonfruit.png',
    rarity: 3,
    source: 'Found near rivers in Navia and Crown'
}
var barnacle = {
    name: 'Barnacle',
    imgSrc: 'barnacle.png',
    rarity: 3,
    source: 'Found near the sea in Warren'
}
var onion = {
    name: 'Onion',
    imgSrc: 'onion.png',
    rarity: 3,
    source: 'Purchased at food vendor'
}
var snowblossom = {
    name: 'Snow Blossom',
    imgSrc: 'snowblossom.png',
    rarity: 3,
    source: 'Found in Warren'
}
var pinecone = {
    name: 'Pine Cone',
    imgSrc: 'pinecone.png',
    rarity: 3,
    source: 'Found in Warren (around pine trees)'
}
var caviar = {
    name: 'Caviar',
    imgSrc: 'caviar.png',
    rarity: 3,
    source: 'Obtained from raider camp enemies'
}
var nut = {
    name: 'Nut',
    imgSrc: 'nut.png',
    rarity: 4,
    source: 'Found in Navia'
}
var birdpotato = {
    name: "Bird's Head Potato",
    imgSrc: 'birdpotato.png',
    rarity: 4,
    source: 'Found in Warren'
}
var snowlotus = {
    name: 'Snow Lotus',
    imgSrc: 'snowlotus.png',
    rarity: 4,
    source: 'Found in Warren'
}
var blacktruffle = {
    name: 'Black Truffle',
    imgSrc: 'blacktruffle.png',
    rarity: 4,
    source: 'Found in Warren'
}
var cordyceps = {
    name: 'Cordyceps',
    imgSrc: 'cordyceps.png',
    rarity: 4,
    source: 'Found in Warren'
}
var firmmeat = {
    name: 'Firm Meat',
    imgSrc: 'firmmeat.png',
    rarity: 4,
    source: 'Obtained by hunting wild animals'
}
var fattymeat = {
    name: 'Fatty Meat',
    imgSrc: 'fattymeat.png',
    rarity: 4,
    source: 'Obtained by hunting wild animals'
}
var salmon = {
    name: 'Salmon',
    imgSrc: 'salmon.png',
    rarity: 4,
    source: 'Found in rivers in Crown and Warren'
}
var snail = {
    name: 'Snail',
    imgSrc: 'snail.png',
    rarity: 4,
    source: 'Found in Navia (beach)'
}

var food = [
    {
        id: 0,
        name: 'Fried Mushroom',
        imgSrc: 'friedmushroom.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">5</span> hunger<br>Recovers <span class="text-rarity-2">10% + 1,500</span> HP',
        ingredients: [
            [mushroom, 2]
        ]
    },
    {
        id: 1,
        name: 'Crispy Grilled Fish',
        imgSrc: 'crispygrilledfish.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger',
        ingredients: [
            [silverperch, 1]
        ]
    },
    {
        id: 2,
        name: 'Wheat Bread',
        imgSrc: 'wheatbread.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger',
        ingredients: [
            [wheat, 2]
        ]
    },
    {
        id: 3,
        name: 'Sizzled Barbequed Meat',
        imgSrc: 'sizzledbarbecuedmeat.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger',
        ingredients: [
            [meat, 2]
        ]
    },
    {
        id: 4,
        name: 'Lettuce Salad',
        imgSrc: 'lettucesalad.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">5</span> hunger<br>Recovers <span class="text-rarity-2">10% + 1,500</span> HP',
        ingredients: [
            [lettuce, 2],
            [dressing, 1]
        ]
    },
    {
        id: 5,
        name: 'Fried Egg',
        imgSrc: 'friedegg.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">5</span> hunger<br>Recovers <span class="text-rarity-2">10% + 1,500</span> HP',
        ingredients: [
            [egg, 2]
        ]
    },
    {
        id: 6,
        name: 'Vegetable Egg Soup',
        imgSrc: 'vegetableeggsoup.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">7</span> hunger<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [seaweed, 2],
            [egg, 1]
        ]
    },
    {
        id: 7,
        name: 'Milk Oats',
        imgSrc: 'milkoat.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">14</span> hunger',
        ingredients: [
            [wheat, 2],
            [milk, 1]
        ]
    },
    {
        id: 8,
        name: 'Crispy Chicken Drumstick Burger',
        imgSrc: 'crispychickendrumstickburger.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">7</span> hunger<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [wheat, 1],
            [drumstick, 1],
            [lettuce, 1]
        ]
    },
    {
        id: 9,
        name: 'Egg Fried Rice',
        imgSrc: 'eggfriedrice.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">14</span> hunger',
        ingredients: [
            [rice, 2],
            [egg, 1]
        ]
    },
    {
        id: 10,
        name: 'Golden Chopped Tomato',
        imgSrc: 'goldenchoppedtomato.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">7</span> hunger<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [tomato, 2],
            [egg, 2]
        ]
    },
    {
        id: 11,
        name: 'Mushroom Soup',
        imgSrc: 'mushroomsoup.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">7</span> hunger<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [mushroom, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 12,
        name: 'Steamed Snails',
        imgSrc: 'steamedsnails.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">7</span> hunger<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [hornedconch, 2],
            [lettuce, 1]
        ]
    },
    {
        id: 13,
        name: 'Potato Stew',
        imgSrc: 'potatostew.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">14</span> hunger',
        ingredients: [
            [potato, 1],
            [meat, 1]
        ]
    },
    {
        id: 14,
        name: 'French Fries',
        imgSrc: 'frenchfries.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">14</span> hunger',
        ingredients: [
            [potato, 1],
            [dressing, 1]
        ]
    },
    {
        id: 15,
        name: 'Vegetable Salad',
        imgSrc: 'vegetablesalad.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">7</span> hunger<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [fruitdrop, 1],
            [tomato, 1],
            [lettuce, 1],
            [dressing, 1]
        ]
    },
    {
        id: 16,
        name: 'Fried Chicken',
        imgSrc: 'friedchicken.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">7</span> hunger<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [drumstick, 2],
            [wheat, 1]
        ]
    },
    {
        id: 17,
        name: 'Honey Fruit Juice',
        imgSrc: 'honeyfruitjuice.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">300</span> stamina<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [fruitdrop, 2],
            [honey, 1],
            [sparklingwater, 1]
        ]
    },
    {
        id: 18,
        name: 'Cocktail',
        imgSrc: 'cocktail.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">300</span> stamina<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [ghostmushroom, 2],
            [milk, 1],
            [sparklingwater, 1]
        ]
    },
    {
        id: 19,
        name: 'Stir Fried Broccoli',
        imgSrc: 'stirfriedbroccoli.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">14</span> hunger',
        ingredients: [
            [broccoli, 2]
        ]
    },
    {
        id: 20,
        name: 'Meat Buns',
        imgSrc: 'meatbuns.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">14</span> hunger',
        ingredients: [
            [wheat, 2],
            [meat, 1]
        ]
    },
    {
        id: 21,
        name: 'Mushroom Fillet',
        imgSrc: 'mushroomfillet.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">7</span> hunger<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [mushroom, 2],
            [silverperch, 1]
        ]
    },
    {
        id: 22,
        name: 'Dandelion Mushroom Soup',
        imgSrc: 'dandelionmushroomsoup.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">7</span> hunger<br>Recovers <span class="text-rarity-2">12% + 3,300</span> HP',
        ingredients: [
            [dandelion, 1],
            [mushroom, 2]
        ]
    },
    {
        id: 23,
        name: 'Pearl Fish',
        imgSrc: 'pearlfish.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">8</span> hunger<br>Recovers <span class="text-rarity-2">13% + 10,000</span> HP',
        ingredients: [
            [sturgeon, 1],
            [egg, 2]
        ]
    },
    {
        id: 24,
        name: 'Red Wheat Bread',
        imgSrc: 'redwheatbread.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">16</span> hunger',
        ingredients: [
            [redwheat, 2]
        ]
    },
    {
        id: 25,
        name: 'Fire Ear Mushroom Soup',
        imgSrc: 'fireearmushroomsoup.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">400</span> stamina<br>Recovers <span class="text-rarity-2">13% + 10,000</span> HP',
        ingredients: [
            [fireear, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 26,
        name: 'Black Moss Soup',
        imgSrc: 'blackmosssoup.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">8</span> hunger<br>Recovers <span class="text-rarity-2">13% + 10,000</span> HP',
        ingredients: [
            [blackmoss, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 27,
        name: 'Seafood Soup',
        imgSrc: 'seafoodsoup.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Ice Damage +1%<br>
            Ice Damage +45</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [hornedconch, 3],
            [seaconch, 2],
            [lettuce, 1]
        ]
    },
    {
        id: 28,
        name: 'Spicy Thick Meat Burger',
        imgSrc: 'spicythickmeatburger.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Physical Damage +1%<br>
            Physical Damage +45</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [wheat, 3],
            [hindleg, 2],
            [lettuce, 1]
        ]
    },
    {
        id: 29,
        name: 'Steamed Crab',
        imgSrc: 'steamedcrab.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">15% + 20,000</span> HP',
        ingredients: [
            [shuttlecrab, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 30,
        name: 'Strawberry Iced Soda',
        imgSrc: 'strawberryicedsoda.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Fire Resistance +10%<br>
            Fire Resistance +170</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [strawberry, 2],
            [honey, 2],
            [sparklingwater, 1]
        ]
    },
    {
        id: 31,
        name: 'Lightning Blueberry Soda',
        imgSrc: 'lightningblueberrysoda.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Electric Resistance +10%<br>
            Electric Resistance +170</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [blueberry, 1],
            [honey, 2],
            [sparklingwater, 1]
        ]
    },
    {
        id: 32,
        name: 'Energy Salad',
        imgSrc: 'energysalad.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Physical Resistance +10%<br>
            Physical Resistance +170</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [broccoli, 1],
            [tomato, 1],
            [lettuce, 1],
            [egg, 1],
            [dressing, 1]
        ]
    },
    {
        id: 33,
        name: 'Sea Urchin Omelette',
        imgSrc: 'seaurchinomelette.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">15% + 20,000</span> HP',
        ingredients: [
            [seaurchin, 2],
            [egg, 2]
        ]
    },
    {
        id: 34,
        name: 'Double Berry Sauce Toast',
        imgSrc: 'doubleberrysaucetoast.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Electric Damage +1%<br>
            Electric Damage +45</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [blueberry, 1],
            [strawberry, 1],
            [wheat, 3]
        ]
    },
    {
        id: 35,
        name: 'Tomato Spaghetti Omelette',
        imgSrc: 'tomatospaghettiomelette.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Fire Damage +1%<br>
            Fire Damage +45</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [tomato, 4],
            [wheat, 3],
            [egg, 1]
        ]
    },
    {
        id: 36,
        name: 'Fruit Cake',
        imgSrc: 'fruitcake.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">15% + 20,000</span> HP',
        ingredients: [
            [strawberry, 2],
            [wheat, 1],
            [fruitdrop, 1],
            [egg, 1]
        ]
    },
    {
        id: 37,
        name: 'Boiled Sea Conch',
        imgSrc: 'boiledseaconch.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">15% + 20,000</span> HP',
        ingredients: [
            [seaconch, 2],
            [lettuce, 3]
        ]
    },
    {
        id: 38,
        name: 'Roasted Ham',
        imgSrc: 'roastedham.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <span class="text-rarity-2">500</span> stamina<br>Recovers <span class="text-rarity-2">15% + 20,000</span> HP',
        ingredients: [
            [hindleg, 2]
        ]
    },
    {
        id: 39,
        name: 'Spinach Pie',
        imgSrc: 'spinachpie.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">16% + 34,000</span> HP',
        ingredients: [
            [spinach, 2],
            [redwheat, 2]
        ]
    },
    {
        id: 40,
        name: 'Chocolate Bun',
        imgSrc: 'chocolatebun.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">16% + 34,000</span> HP',
        ingredients: [
            [cocoabeans, 2],
            [redwheat, 2]
        ]
    },
    {
        id: 41,
        name: 'Balloon Fruit Salad',
        imgSrc: 'balloonfruitsalad.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">16% + 34,000</span> HP',
        ingredients: [
            [balloonfruit, 2],
            [tomato, 2],
            [dressing, 1]
        ]
    },
    {
        id: 42,
        name: 'Spinach Soup',
        imgSrc: 'spinachsoup.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">16% + 34,000</span> HP',
        ingredients: [
            [spinach, 2],
            [lettuce, 4]
        ]
    },
    {
        id: 43,
        name: 'Spicy Eel',
        imgSrc: 'spicyeel.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Electric Resistance +10%<br>
            Electric Resistance +290</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [thundereel, 1]
        ]
    },
    {
        id: 44,
        name: 'Mushroom Eel Soup',
        imgSrc: 'mushroomeelsoup.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Electric Damage +1%<br>
            Electric Damage +80</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [thundereel, 1],
            [fireear, 2]
        ]
    },
    {
        id: 45,
        name: 'Sea Crab Soup',
        imgSrc: 'seacrabsoup.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Fire Resistance +10%<br>
            Fire Resistance +290</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [hermitcrab, 2],
            [mushroom, 4]
        ]
    },
    {
        id: 46,
        name: 'Sweet Pomegranate Juice',
        imgSrc: 'sweetpomegranatejuice.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">600</span> stamina<br>Recovers <span class="text-rarity-2">16% + 34,000</span> HP',
        ingredients: [
            [pomegranate, 2],
            [honey, 2],
            [sparklingwater, 1]
        ]
    },
    {
        id: 47,
        name: 'Cocoa Milk',
        imgSrc: 'cocoamilk.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Ice Resistance +10%<br>
            Ice Resistance +290</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [cocoabeans, 2],
            [honey, 2],
            [milk, 1]
        ]
    },
    {
        id: 48,
        name: 'Dragon Fruit Tea',
        imgSrc: 'dragonfruittea.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Fire Damage +1%<br>
            Fire Damage +80</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [dragonfruit, 2],
            [honey, 2]
        ]
    },
    {
        id: 49,
        name: 'Barnacle Stew',
        imgSrc: 'barnaclestew.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Physical Resistance +10%<br>
            Physical Resistance +290</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [barnacle, 2],
            [lettuce, 4]
        ]
    },
    {
        id: 50,
        name: 'Barnacle Seafood Pizza',
        imgSrc: 'barnacleseafoodpizza.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">16% + 34,000</span> HP',
        ingredients: [
            [barnacle, 1],
            [redwheat, 2],
            [onion, 1]
        ]
    },
    {
        id: 51,
        name: 'Snow Cuckoo Tea',
        imgSrc: 'snowcuckootea.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Ice Damage +1%<br>
            Ice Damage +80</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [snowblossom, 1],
            [milk, 1],
            [honey, 2]
        ]
    },
    {
        id: 52,
        name: 'Pine Nut Cocoa',
        imgSrc: 'pinenutcocoa.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">16% + 34,000</span> HP',
        ingredients: [
            [pinecone, 1],
            [cocoabeans, 1],
            [milk, 2]
        ]
    },
    {
        id: 53,
        name: 'Caviar Sushi',
        imgSrc: 'caviarsushi.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">10</span> hunger<br>Recovers <span class="text-rarity-2">16% + 34,000</span> HP',
        ingredients: [
            [caviar, 1],
            [rice, 2],
            [seaweed, 2]
        ]
    },
    {
        id: 54,
        name: 'Caviar Potato Balls',
        imgSrc: 'caviarpotatoballs.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">10</span> hunger<br>
            <span class="text-rarity-2">Physical Damage +1%<br>
            Physical Damage +80</span><br>
            Duration <span class="text-rarity-2">900</span> sec`,
        ingredients: [
            [caviar, 1],
            [potato, 2]
        ]
    },
    {
        id: 55,
        name: 'Nut Tea',
        imgSrc: 'nuttea.png',
        rarity: 4,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">20</span> hunger<br>Recovers <span class="text-rarity-2">20% + 60,000</span> HP',
        ingredients: [
            [nut, 1],
            [pinecone, 2],
            [honey, 2]
        ]
    },
    {
        id: 56,
        name: "Bird's Head Potato Cake",
        imgSrc: 'birdsheadpotatocake.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">20</span> hunger<br>
            <span class="text-rarity-2">Electric Damage +2%<br>
            Electric Damage +150</span><br>
            Duration <span class="text-rarity-2">1200</span> sec`,
        ingredients: [
            [birdpotato, 1],
            [redwheat, 3]
        ]
    },
    {
        id: 57,
        name: 'Snow Lotus Soup',
        imgSrc: 'snowlotussoup.png',
        rarity: 4,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">800</span> stamina<br>Recovers <span class="text-rarity-2">20% + 60,000</span> HP',
        ingredients: [
            [snowlotus, 1],
            [honey, 2]
        ]
    },
    {
        id: 58,
        name: 'Truffle Fried Rice',
        imgSrc: 'trufflefriedrice.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">20</span> hunger<br>
            <span class="text-rarity-2">Physical Damage +2%<br>
            Physical Damage +150</span><br>
            Duration <span class="text-rarity-2">1200</span> sec`,
        ingredients: [
            [blacktruffle, 1],
            [onion, 1],
            [rice, 2]
        ]
    },
    {
        id: 59,
        name: 'Cordyceps Noodles',
        imgSrc: 'cordycepsnoodles.png',
        rarity: 4,
        stars: 2,
        effect: 'Recovers <span class="text-rarity-2">20</span> hunger<br>Recovers <span class="text-rarity-2">20% + 60,000</span> HP',
        ingredients: [
            [cordyceps, 1],
            [redwheat, 3]
        ]
    },
    {
        id: 60,
        name: 'Barbeque Steak',
        imgSrc: 'barbequesteak.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">20</span> hunger<br>
            <span class="text-rarity-2">Electric Resistance +15%<br>
            Electric Resistance +675</span><br>
            Duration <span class="text-rarity-2">1200</span> sec`,
        ingredients: [
            [firmmeat, 1]
        ]
    },
    {
        id: 61,
        name: 'Mushroom Steak',
        imgSrc: 'mushroomsteak.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">20</span> hunger<br>
            <span class="text-rarity-2">Fire Damage +2%<br>
            Fire Damage +150</span><br>
            Duration <span class="text-rarity-2">1200</span> sec`,
        ingredients: [
            [firmmeat, 1],
            [fireear, 3]
        ]
    },
    {
        id: 62,
        name: 'Braised Pork',
        imgSrc: 'braisedpork.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">20</span> hunger<br>
            <span class="text-rarity-2">Ice Resistance +15%<br>
            Ice Resistance +675</span><br>
            Duration <span class="text-rarity-2">1200</span> sec`,
        ingredients: [
            [fattymeat, 1]
        ]
    },
    {
        id: 63,
        name: 'Juicy Meat Sandwich',
        imgSrc: 'juicymeatsandwich.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">20</span> hunger<br>
            <span class="text-rarity-2">Fire Resistance +15%<br>
            Fire Resistance +675</span><br>
            Duration <span class="text-rarity-2">1200</span> sec`,
        ingredients: [
            [fattymeat, 1],
            [redwheat, 2],
            [egg, 2]
        ]
    },
    {
        id: 64,
        name: 'Salmon Sashimi',
        imgSrc: 'salmonsashimi.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">20</span> hunger<br>
            <span class="text-rarity-2">Ice Damage +2%<br>
            Ice Damage +150</span><br>
            Duration <span class="text-rarity-2">1200</span> sec`,
        ingredients: [
            [salmon, 1]
        ]
    },
    {
        id: 65,
        name: 'Snail Baked Rice',
        imgSrc: 'snailbakedrice.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <span class="text-rarity-2">20</span> hunger<br>
            <span class="text-rarity-2">Physical Resistance +15%<br>
            Physical Resistance +675</span><br>
            Duration <span class="text-rarity-2">1200</span> sec`,
        ingredients: [
            [snail, 1],
            [rice, 2]
        ]
    }
]