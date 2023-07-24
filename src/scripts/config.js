const Config = {
    ROSBRIDGE_SERVER_IP: "localhost",
    // ROSBRIDGE_SERVER_IP: "192.168.1.52", // Abdelrahman device ip address
    ROSBRIDGE_SERVER_PORT: "9090",
    RECONNECTION_TIMER: 3000,
    CMD_VEL_TOPIC: "/turtle1/cmd_vel",
    POSE_TOPIC: "/turtle1/pose",
    MY_TOPIC: "/my_topic"
  };
  
  export default Config;