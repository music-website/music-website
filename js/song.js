

$(function(){
	var song = [
	
		{
			'cover' : 'images/ss.jpg',
			'src' : 'mp3/我的一个道姑朋友.mp3',
			'title' : '我的一个道姑朋友-双笙'
		}

	];

	var audioFn = audioPlay({
		song : song,
		autoPlay : false  //是否立即播放第一首，autoPlay为true且song为空，会alert文本提示并退出
	});



	/* 暂停播放 */
	//audioFn.stopAudio();

	/* 开启播放 */
	//audioFn.playAudio();

	/* 选择歌单中索引为3的曲目(索引是从0开始的)，第二个参数true立即播放该曲目，false则不播放 */
	//audioFn.selectMenu(3,true);

	/* 查看歌单中的曲目 */
	//console.log(audioFn.song);

	/* 当前播放曲目的对象 */
	//console.log(audioFn.audio);

window.onload=function (){
		//添加新歌曲
		var taga=document.getElementsByTagName('a');
		var newsong;
		for (var i=0;i<taga.length;i++){
		
		taga[i].onclick=function(){

			var pic=this.id.split("-");
			 newsong={
			  	'cover' : 'images'+'/'+pic[1]+'.jpg',
			  	'src' : this.href,
			  	'title' : this.title
			 }
				audioFn.newSong(newsong,true);
			 	window.open("play-song.html");
				return false;
			}
		}

}


	
});
	
