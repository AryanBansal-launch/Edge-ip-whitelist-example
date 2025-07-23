export default async function handler(request) {
  // Define your whitelisted IPs
  const allowedIPs = [
    "127.0.0.1",        
    "::1",            
    "192.168.1.100",    
    "10.0.0.50",        
    "172.16.0.10", 
    "103.91.88.246"     
  ]; 

  // Get the client's IP address (as sent by the platform)
//   const clientIP = request.headers.get("x-forwarded-for") || "";
  const clientIP = request.headers.get("cf-connecting-ip") || "";
  const clientIPList = clientIP.split(",").map(ip => ip.trim()); 


  // Log for reference
  console.log("All headers:", Object.fromEntries(request.headers.entries()));

  // Check if any forwarded IP is in the allowed list
  const allowed = clientIPList.some(ip => allowedIPs.includes(ip));
  console.log("Access allowed:", allowed);

  if (!allowed) {
    console.log("Access denied - IP not in whitelist");
    return new Response("Forbidden. Your IP is not in the whitelist.", { status: 403 });
  }

  // Continue with normal logic if IP is allowed
  // ... your normal edge function logic here ...
  console.log("Access granted - proceeding with request");
  return fetch(request);
}
