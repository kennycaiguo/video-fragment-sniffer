# Video Fragment Sniffer

When streaming a video, bits of it called <code>fragments</code> are being temporarily downloaded on your computer.

All you need to do is to open your browser developer tool (generally by pressing F12), go in the tab "network" and look for entries of type "video/f4f". These types of entries are indeed the fragments we're looking for.

If you're lucky, this fragment will have a fairly easy pattern to understand, like the example below:
<pre>http://web.q1.tf1.fr/2/USP-0x0/67/57/12976757/ssm/12976757.ism/12976757-audio%3D64000-video%3D600720-Seg1-Frag6?vk=MTI5NzY3NTcuZjRt&st=jd8Or30-Ah4AxpH1YVQN9A&e=1459243107&t=1459113507&bu=WAT&login=the-voice&i=90.112.246.38&u=609195cb6b997f0b387506de85171d39&sum=39f6cb9bc681bd51eb7d4e97ccc14230&min_bitrate=400000&max_bitrate=1000000&seek=wat&als=34.65,30,5.77,1,633,6192,25.85,0,0,225,f,5.32,431,f,s,DRYXMXVZDBZU,2.11.3,225&hdcore=2.11.3</pre>

If you look closely you'll notice the part that are interesting for us:  
http://web.q1.tf1.fxxxxxxxxxxxxxxxxxdeo%3D600720-Seg1-<code>Frag6</code>?vk=MTI5NzY3Nxxxxxxxxxxxxxxxxx

Let's look at a second entry of type "video/f4f" to see if we can define a pattern:  
http://web.q1.tf1.fr/2/Uxxxxxxxxxxxxxxxxx00720-Seg1-<code>Frag7</code>?vk=MTI5NzY3NTcuxxxxxxxxxxxxxxxxx

Looks like we've got our pattern! Now all you need to do is follow these few steps:

* Copy the first part of the URL:
<pre>http://web.q1.tf1.fr/2/USP-0x0/67/57/12976757/ssm/12976757.ism/12976757-audio%3D64000-video%3D600720-Seg1-Frag</pre>
* Paste it in the field "Prefix URL"
* Copy the second part of the URL:
<pre>?vk=MTI5NzY3NTcuZjRt&st=jd8Or30-Ah4AxpH1YVQN9A&e=1459243107&t=1459113507&bu=WAT&login=the-voice&i=90.112.246.38&u=609195cb6b997f0b387506de85171d39&sum=39f6cb9bc681bd51eb7d4e97ccc14230&min_bitrate=400000&max_bitrate=1000000&seek=wat&als=34.65,30,5.77,1,633,6192,25.85,0,0,225,f,5.32,431,f,s,DRYXMXVZDBZU,2.11.3,225&hdcore=2.11.3</pre>
* Paste it in the field "Suffix URL"
* Select the range of fragments you want to get, and click on "Download fragments".

### Note:
A massive range of fragments might cause your browser to crash, your CPU to hate you, and to eventually burn your laps if you're working on a laptop...  
be reasonable, go bit by bit ;)