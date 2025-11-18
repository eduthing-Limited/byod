//Polesden Lacey Infant School - Pac File
function FindProxyForURL(url, host)
{
    // If the requested website is hosted within the internal network, send direct. 
    if (isPlainHostName(host) || 
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") || 
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") || 
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") || 
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")) 
        return "DIRECT"; 
        
    // Return Proxy for all other addresses if on school network
    // PLI Proxy
    if (isInNet(myIpAddress(), "10.142.73.0", "255.255.255.0"))
        return "PROXY sslfilter.staffproxy.segfl.ifl.net:8080";
    
    // Default to direct if none of the conditions match
    return "DIRECT";
}
