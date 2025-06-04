(function(global){
  function Chart(ctx, config){
    if(!(this instanceof Chart)) return new Chart(ctx, config);
    this.ctx = ctx;
    this.type = config.type;
    this.data = config.data || {};
    this.options = config.options || {};
    this.draw();
  }

  Chart.prototype.draw = function(){
    if(this.type === 'bar'){
      this.drawBar();
    }
  };

  Chart.prototype.drawBar = function(){
    var ctx = this.ctx;
    var labels = this.data.labels || [];
    var ds = this.data.datasets ? this.data.datasets[0] : {data:[]};
    var data = ds.data || [];
    var color = ds.backgroundColor || '#888';
    var barThickness = ds.barThickness || 40;

    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var padding = 40;
    var barWidth = (width - padding*2) / data.length;
    var maxVal = 0;
    for(var i=0;i<data.length;i++) if(data[i]>maxVal) maxVal = data[i];
    if(maxVal === 0) maxVal = 1;

    ctx.clearRect(0,0,width,height);
    ctx.textAlign = 'center';
    ctx.font = '14px sans-serif';

    for(var i=0;i<data.length;i++){
      var value = data[i];
      var barHeight = (value/maxVal) * (height - padding*2);
      var x = padding + i * barWidth + barWidth/2 - barThickness/2;
      var y = height - padding - barHeight;

      ctx.fillStyle = color;
      ctx.fillRect(x, y, barThickness, barHeight);
      ctx.fillStyle = '#000';
      ctx.fillText(labels[i] || '', padding + i * barWidth + barWidth/2, height - padding + 15);
      ctx.fillText(String(value), padding + i * barWidth + barWidth/2, y - 5);
    }
  };

  global.Chart = Chart;
})(this);
