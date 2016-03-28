# Video Fragment Sniffer

When streaming a video, bits of it called <code>fragments</code> are being temporarily sent to your browser.

While some scripts will capture these fragments step by step, as the media is being streamed, Video Fragment Sniffer will perform a mass-download of all fragments without the need for you to even watch the video.  
Once you've got all fragments on your hard drive, put them together using one of the many "f4f assembler" software out there (Bigasoft Video Downloader, F4F Converter etc...), and you'll have your single-file video ready.

***

All you need to do is to open your browser developer tool (generally by pressing F12), go in the tab "network" and look for entries of type "video/f4f". These types of entries are indeed the fragments we're looking for.

If you're lucky, this fragment will have a fairly easy pattern to understand, like the example below:
<pre>http://web.q1.tf1.fr/2/USP-0x0/67/57/12976757/ssm/12976757.ism/12976757-audio%3D64000-video%3D600720-Seg1-Frag6?vk=MTI5NzY3NTcuZjRt&st=jd8Or30-Ah4AxpH1YVQN9A&e=1459243107&t=1459113507&bu=WAT&login=the-voice&i=90.112.246.38&u=609195cb6b997f0b387506de85171d39&sum=39f6cb9bc681bd51eb7d4e97ccc14230&min_bitrate=400000&max_bitrate=1000000&seek=wat&als=34.65,30,5.77,1,633,6192,25.85,0,0,225,f,5.32,431,f,s,DRYXMXVZDBZU,2.11.3,225&hdcore=2.11.3</pre>

If you look closely you'll notice the part that are interesting for us:  
<pre>http://web.q1.tf1.fxxxxxxxxxxxxxxxxxdeo%3D600720-Seg1-<strong>Frag6</strong>?vk=MTI5NzY3Nxxxxxxxxxxxxxxxxx</pre>

Let's take a look at a second entry of type "video/f4f" to see if we can define a pattern:  
<pre>http://web.q1.tf1.fr/2/Uxxxxxxxxxxxxxxxxx00720-Seg1-<strong>Frag7</strong>?vk=MTI5NzY3NTcuxxxxxxxxxxxxxxxxx</pre>

Looks like we've got our pattern: The keyword "Frag" followed by an incremented number!  
Now lets get started with Video Fragment Sniffer by following these few steps:

* Copy the first part of the URL (until the keyword "Frag"):
<pre>http://web.q1.tf1.fr/2/USP-0x0/67/57/12976757/ssm/12976757.ism/12976757-audio%3D64000-video%3D600720-Seg1-Frag</pre>
* Paste it in the field "Prefix URL"
* Copy the second part of the URL (just after the incremented number):
<pre>?vk=MTI5NzY3NTcuZjRt&st=jd8Or30-Ah4AxpH1YVQN9A&e=1459243107&t=1459113507&bu=WAT&login=the-voice&i=90.112.246.38&u=609195cb6b997f0b387506de85171d39&sum=39f6cb9bc681bd51eb7d4e97ccc14230&min_bitrate=400000&max_bitrate=1000000&seek=wat&als=34.65,30,5.77,1,633,6192,25.85,0,0,225,f,5.32,431,f,s,DRYXMXVZDBZU,2.11.3,225&hdcore=2.11.3</pre>
* Paste it in the field "Suffix URL"
* Select the range of fragments you want to get
* Set the delay in milliseconds between each fragment request (by default 500)
* Click on "Download fragments"

***

### Note:
A massive range of fragments might cause your browser to crash, your CPU to hate you, and to eventually burn your laps if you're working on a laptop... be reasonable, go bit by bit ;)