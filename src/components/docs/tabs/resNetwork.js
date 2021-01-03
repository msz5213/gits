import React from 'react';
import GoogleAd from '../../../components/GoogleAd';

const VPN = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/VPN_overview-en.svg/1200px-VPN_overview-en.svg.png';
const IP_ADDRESS = 'https://en.wikipedia.org/wiki/IP_address';
const IPV4 = 'https://en.wikipedia.org/wiki/IPv4';
const IPV6 = 'https://en.wikipedia.org/wiki/IPv6';
const IPV4_POOL = 'https://www.ripe.net/manage-ips-and-asns/ipv4/ipv4-pool';
const UNDECLLION = 'https://www.edn.com/ipv6-how-many-ip-addresses-can-dance-on-the-head-of-a-pin/';
const TWO_PART = 'https://www.cisco.com/c/dam/en/us/support/docs/ip/routing-information-protocol-rip/13788-3-00.gif';
const SUBNET = 'https://en.wikipedia.org/wiki/Subnetwork';
const IP_WEBSITE = 'https://blog.telegeography.com/how-do-ip-addresses-work';
const NUM_AUTHO ='https://www.iana.org/';
const HERE = 'https://icannwiki.org/Internet_Assigned_Numbers_Authority#IP_Address';
const PROXY = 'https://en.wikipedia.org/wiki/Proxy_server';
const PROXY_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proxy_concept_en.svg/2560px-Proxy_concept_en.svg.png';
const FIND_IP = 'https://www.avg.com/en/signal/find-ip-address#:~:text=Open%20the%20Apple%20menu%20and,be%20displayed%20in%20the%20middle.';

const resNetwork = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Networking</h3>
            </div>
            <div className='tc pt5'>
                <img className='pr4 pt4 pb4 VPN-logo' src={VPN} alt='Scrum Logo' />
            </div>
            <div>
                <p className='pt4'>
                    A virtual private network (VPN) gives you online privacy and anonymity by creating a private network from a public internet connection. VPNs mask your internet protocol (IP) address so your online actions are virtually untraceable.
                </p>
            </div>
            <div>
                <h2>How Do IP Addresses Work?</h2>
                <p>What’s an IP address and how does it work?</p>
                <h3>What’s an IP Address?</h3>
                <p>
                    An IP address is a unique identifier for every machine using the internet. Known as your “internet protocol address,” this identifier is written as a string of numbers separated by periods. (Google “what is my IP address” to see yours.)
                </p>
                <p>
                    <a href={IP_ADDRESS} target="_blank" rel="noopener noreferrer">IP Address</a>, We could talk about the two different standards for IP addresses. <a href={IPV6} target="_blank" rel="noopener noreferrer">Internet Protocol Version 6 </a>(IPv6) is the most recent version of IP, while <a href={IPV4} target="_blank" rel="noopener noreferrer">Internet Protocol Version 4 </a>(IPv4) was the first IP address used by the public. Most addresses are IPv4. It’s the most widely-deployed IP used to connected devices to the internet.
                </p>
                <p>
                    When we crunch the numbers, we see that IPv4’s 32-bit address allows for about 4 billion addresses. While that sounds like a lot, we can safely assume that we already have 4 billion devices that want to connect to the internet. (See for yourself: <a href={IPV4_POOL} target="_blank" rel="noopener noreferrer">these guys track how many IPv4s are left</a>.) 
                </p>
                <p>
                    IPv6 uses eight blocks of four hexadecimal digits; it was designed as an upgrade that also satisfies the need for more addresses. In pure theory, there are <a href={UNDECLLION} target="_blank" rel="noopener noreferrer">340 undecillion IPv6 addresses</a>. That's more addresses than atoms on the surface of the Earth.
                </p>
                <h3>How Do IP Addresses Work?</h3>
                <p>
                    When you jump online to send an email, you’re accessing a network that is connected to the internet itself or one that gives you access to the internet. Perhaps that’s connecting to whatever internet service provider (ISP) you have at home or using a company network in the office. 
                </p>
                <p> 
                    To do this successfully, your computer uses internet protocol, and your IP address is used as a virtual return address to establish a connection.  
                </p>
                <h3>Sidebar: Reading an IP Address</h3>
                <p>
                    The blocks of hexadecimal digits that make up an address are called octets. These octets create an addressing scheme that accommodates different network types. 
                </p>
                <p>
                    <a href={TWO_PART} target="_blank" rel="noopener noreferrer">IP addresses are broken into two parts:</a> network address and host address (host = the specific device on the network).
                </p>
                <p>
                    This is where it all comes together. The first few octets in an IP address identify the network. The exact amount of octets depends on the class of network. For example, in a Class A address, the network portion is contained within the first octet, while the rest of the address is used to denote <a href={SUBNET}>subnets</a> and hosts. In a Class B address, the first two octets are the network portion, while the rest is for subnets and hosts, etc.
                </p>
                <h3>
                    How Are IP Addresses Assigned?
                </h3>
                <p>
                    All of these addresses are allocated by the <a href={NUM_AUTHO} target="_blank" rel="noopener noreferrer">Internet Assigned Numbers Authority</a>. This nonprofit U.S. corporation coordinates global IP addresses, which you can read all about <a href={HERE} target="_blank" rel="noopener noreferrer">here</a>.
                </p>
                <p>
                    More specifically, IANA assigns blocks of IP addresses to regional internet registries. In turn, these regional registries allocate addresses to ISP, companies, schools, and similar institutions within their zone.
                </p>
                <p>
                    That means your IP address probably comes from your company network or ISP, which received that address from a regional internet registry, which was allocated a block of addresses from IANA. (It’s a process.)
                </p>
            </div>
            <div classNames='pt4'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={FIND_IP} target="_blank" rel="noopener noreferrer">
                    Find Your IP Address on Windows or Mac
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={IP_WEBSITE} target="_blank" rel="noopener noreferrer">
                    Learn More...
                </a>
            </div>
            <div>
                <img className='pr4 pt4 pb4 scrum-logo-1' src={PROXY_LOGO} alt='Scrum Logo' height='400' width='650'/>
                <h3 className='pt4'>Proxy server</h3>
                <p>
                    A <a href={PROXY} target="_blank" rel="noopener noreferrer">proxy server </a>provides a gateway between users and the internet. It is a server, referred to as an “intermediary” because it goes between end-users and the web pages they visit online. When a computer connects to the internet, it uses an IP address.
                </p>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resNetwork;
