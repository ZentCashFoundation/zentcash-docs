---
title: Zentd behind HAProxy
---

There is a lot to add to this to fill details, however this is enough for people familar to get going ;)

If you are not familar with HAProxy then check it out if you're a sysadmin/devops person it is pretty great. If you are a Containers / Kubernetes kind of person then this kind of thing is handle by the load balancers, sometimes they are HAProxy under the covers.

Combine the below with Zent Cash Developers [zentd-ha](https://github.com/ZentCashFoundation/zentd-ha) and [zentcash-api-proxy](https://github.com/ZentCashFoundation/zentcash-api-proxy) and you should have a farily reliable end point for daemon requests.

```
#---------------------------------------------------------------------
# main frontend which proxys to the backends
#---------------------------------------------------------------------
frontend  main *:21698

    default_backend            ztc-daemon 

#---------------------------------------------------------------------
# round robin balancing between the various backends
#---------------------------------------------------------------------
backend ztc-daemon 
    balance     roundrobin
    option httpchk GET /getinfo
    http-check expect rstring true

# Local node on port 21999
    server  app1 127.0.0.1:21999 check
    server  app2 < node host1 >:21698 check
    server  app3 < node host2 >:21698 check
    server  app4 < node host3 >:21698 check
```

