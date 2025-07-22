export default async function handler(request) {
  // Define your whitelisted IPs
  const allowedIPs = [
    "127.0.0.1",        // Localhost for development
    "::1",              // IPv6 localhost
    "192.168.1.100",    // Sample local network IP
    "10.0.0.50",        // Sample private network IP
    "172.16.0.10", 
    "103.121.153.150"     // Sample private network IP      // Replace with your actual allowed IP addresses
  ]; // Replace with your actual allowed IP addresses

  // Get the client's IP address (as sent by the platform)
  const clientIP = request.headers.get("x-forwarded-for") || "";
  const clientIPList = clientIP.split(",").map(ip => ip.trim()); // handle multiple IPs (proxies etc)

  // Log for reference
  console.log("Client IPs:", clientIPList);
  console.log("Allowed IPs:", allowedIPs);

  // Check if any forwarded IP is in the allowed list
  const allowed = clientIPList.some(ip => allowedIPs.includes(ip));
  console.log("Access allowed:", allowed);

  if (!allowed) {
    console.log("Access denied - IP not in whitelist");
    return new Response("Forbidden", { status: 403 });
  }

  // Continue with normal logic if IP is allowed
  // ... your normal edge function logic here ...
  console.log("Access granted - proceeding with request");
  return fetch(request);
}
