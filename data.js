var APP_DATA = {
  "scenes": [
    {
      "id": "0-vr01_east01",
      "name": "VR01_East01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.08659705084528646,
        "pitch": 0.09491260590379902,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.18026616172025456,
          "pitch": 0.12323506113757787,
          "rotation": 0,
          "target": "1-vr02_elevator"
        },
        {
          "yaw": -0.043280108310298715,
          "pitch": 0.015014118469288462,
          "rotation": 0,
          "target": "2-vr03_west"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vr02_elevator",
      "name": "VR02_Elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.051216874836231,
          "pitch": 0.0026210791991889693,
          "rotation": 0,
          "target": "0-vr01_east01"
        },
        {
          "yaw": 0.018894029429311843,
          "pitch": 0.012037681727868232,
          "rotation": 0,
          "target": "2-vr03_west"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vr03_west",
      "name": "VR03_West",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1883045535956729,
          "pitch": 0.009149710144695788,
          "rotation": 0,
          "target": "3-vr04_confernece"
        },
        {
          "yaw": 2.864317526188157,
          "pitch": 0.07142903853808846,
          "rotation": 0,
          "target": "1-vr02_elevator"
        },
        {
          "yaw": 3.100861623839611,
          "pitch": -0.0004392296654209815,
          "rotation": 0,
          "target": "0-vr01_east01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vr04_confernece",
      "name": "VR04_Confernece",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.682830491593542,
          "pitch": 0.18279141079916172,
          "rotation": 0,
          "target": "2-vr03_west"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
