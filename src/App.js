import React, { useState } from 'react';

const Hub = () => {
  // User profile state
  const [profile] = useState({
    name: 'Tom Anderson',
    friends: 327,
    status: 'Just created The Hub!',
    music: 'Numb - Linkin Park',
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MjRGRDk1QzA3NjgxMUUzQkZGNDhENEJFQjM2OTcyRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MjRGRDk1RDA3NjgxMUUzQkZGNDhENEJFQjM2OTcyRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyNEZEOjU5QzA3NjgxMUUzQkZGNDhENEJFQjM2OTcyRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MjRGRDk1QTA3NjgxMUUzQkZGNDhENEJFQjM2OTcyRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtXKhNEAAAKoSURBVHja7Jq9axNxHMdTqy1FQaSDgwgKguDk4FwQJ3FwEESQ/gOCk4ODk4Pg4ODgIA4OgggO/gEOglAHF0FQqAgiKGJtsa0WbWJ/Hz7f8krvcnfJXe6SS94wXHLJ3ff7+X5/v8u3USwWfV2jUc8B9RzwPwZ8KxQKdQ34Xa1Wq5rQ0IDf+Xy+rgHfM5lMXQN+ZrPZugb8yOVydQ34ls/n6xrwNZ/P1zXgSy6Xq2vA51wuV9eAj7lcjgHfazWg0Wj8GjCgVgM+ZbNZBvyq1YCPmUyGAT9qNeB9Op1mwPdaDXibTqcZ8K1WA14mk0kGfK3VgJfJZJIBX2o14HkikWDA51oNeBqPxxnwsVYDnsRiMQZ8rNWAR9FolAEfajXgQTQaZcD7Wg24F4lEGPCuVgNuRyIRBryt1YAb4XCYAW9qNeBaKBRiwOtaDbgcCoUY8LJWAy4Gg0EGvKjVgHOBQIABz2o14Izf72fA01oNOO3z+RjwpFYDTo6PjzPgca0GHB8bG2PAw1oNODIyMsKAB7UacHB4eJgB92o14MDQ0BAD7tRqwN7BwUEG3K7VgF0DAwMMuFWrAdsHBgYYcLNWA7b29/cz4EatBmzu6+tjwPVaDdjY29vLgGu1GrChp6eHAVdrNWBdd3c3A67UasDqrq4uBlyu1YAVnZ2dDLhUqwHLOjo6GHChVgOWtLe3M+B8rQYsamtrY8C5Wg1Y0NraysCztRrQ0tLSwsAztRrQ3NzczMC6Bvz3AQ8fPvQ1GvUcUM8B9RzwLwAAAP//0gAqy3SCp5AAAAAASUVORK5CYII='
  });

  // Comments system
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Video system
  const [videos, setVideos] = useState([{
    id: 1,
    url: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    title: 'Welcome Video',
    date: new Date().toLocaleDateString()
  }]);
  const [selectedVideo, setSelectedVideo] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, {
        id: Date.now(),
        text: newComment,
        author: 'Friend',
        timestamp: new Date().toLocaleString()
      }]);
      setNewComment('');
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newVideo = {
          id: Date.now(),
          url: event.target.result,
          title: `My Video ${videos.length}`,
          date: new Date().toLocaleDateString()
        };
        setVideos([newVideo, ...videos]);
        setSelectedVideo(newVideo.id);
      };
      reader.readAsDataURL(file);
    }
  };

  const styles = {
    container: {
      backgroundColor: '#F0F0F0',
      minHeight: '100vh',
      fontFamily: '"Trebuchet MS", Arial, sans-serif',
      fontSize: '12px',
      color: '#333333',
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.5) 35px, rgba(255,255,255,0.5) 70px)'
    },
    navBar: {
      background: 'linear-gradient(to bottom, #3B5998, #2B4170)',
      color: 'white',
      padding: '4px 8px',
      borderBottom: '2px solid #1A2947',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '28px',
      fontWeight: 'bold',
      textShadow: '2px 2px 0 #1A2947',
      fontFamily: 'Impact, Charcoal, sans-serif'
    },
    navLinks: {
      display: 'flex',
      gap: '15px',
      fontSize: '14px'
    },
    navItem: {
      cursor: 'pointer',
      padding: '2px 6px',
      border: '1px solid #2B4170',
      borderRadius: '3px',
      background: 'linear-gradient(to bottom, #4F6AA3, #354F84)',
      textTransform: 'uppercase'
    },
    content: {
      display: 'flex',
      maxWidth: '980px',
      margin: '0 auto',
      padding: '15px',
      gap: '15px'
    },
    leftColumn: {
      width: '250px'
    },
    rightColumn: {
      flex: 1
    },
    profileBox: {
      background: '#FFFFFF',
      border: '4px ridge #C0C0C0',
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '15px',
      boxShadow: '3px 3px 5px rgba(0,0,0,0.2)'
    },
    profileHeader: {
      position: 'relative'
    },
    profileImage: {
      width: '100%',
      border: '3px outset #C0C0C0',
      marginBottom: '8px'
    },
    profileStatus: {
      backgroundColor: '#FFFFCC',
      padding: '4px',
      border: '1px dashed #CCCC66',
      margin: '8px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    statusLight: {
      width: '10px',
      height: '10px',
      backgroundColor: '#00FF00',
      borderRadius: '50%',
      animation: 'blink 1s infinite'
    },
    musicPlayer: {
      backgroundColor: '#000000',
      color: '#00FF00',
      padding: '4px',
      marginTop: '8px',
      border: '2px groove #404040'
    },
    friendsBox: {
      background: '#FFFFFF',
      border: '3px double #C0C0C0',
      padding: '10px'
    },
    sectionHeader: {
      color: '#3B5998',
      borderBottom: '1px solid #DDD',
      paddingBottom: '5px',
      margin: '0 0 10px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    headerIcon: {
      width: '16px',
      height: '16px'
    },
    friendItem: {
      display: 'flex',
      alignItems: 'center',
      margin: '8px 0',
      gap: '8px'
    },
    friendNumber: {
      width: '20px',
      color: '#666'
    },
    friendAvatar: {
      width: '32px',
      height: '32px',
      backgroundColor: '#3B5998',
      borderRadius: '3px'
    },
    friendInfo: {
      flex: 1
    },
    friendName: {
      fontWeight: 'bold',
      color: '#3B5998'
    },
    friendStatus: {
      color: '#666',
      fontSize: '11px'
    },
    videoSection: {
      background: '#fff',
      border: '3px double #C0C0C0',
      padding: '10px',
      marginBottom: '15px'
    },
    videoPlayer: {
      width: '100%',
      height: '240px',
      backgroundColor: '#000',
      marginBottom: '10px',
      position: 'relative'
    },
    videoList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px'
    },
    videoThumbnail: {
      position: 'relative',
      cursor: 'pointer',
      border: '3px solid #C0C0C0',
      '&:hover': {
        opacity: 0.8
      }
    },
    selectedVideo: {
      border: '3px solid #3B5998 !important'
    },
    videoPreview: {
      width: '100%',
      height: '80px',
      backgroundColor: '#000',
      overflow: 'hidden'
    },
    videoTitle: {
      fontSize: '10px',
      color: '#3B5998',
      marginTop: '4px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      padding: '0 2px'
    },
    videoDate: {
      fontSize: '9px',
      color: '#666',
      padding: '0 2px'
    },
    uploadLabel: {
      display: 'block',
      background: 'linear-gradient(to bottom, #4CAF50, #45A049)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
      textAlign: 'center',
      marginBottom: '10px',
      border: '1px solid #3D8B3D'
    },
    commentsBox: {
      background: '#FFFFFF',
      border: '3px double #C0C0C0',
      padding: '10px'
    },
    commentForm: {
      marginBottom: '15px'
    },
    commentInput: {
      width: '100%',
      height: '60px',
      marginBottom: '8px',
      padding: '5px',
      border: '1px solid #DDD',
      borderRadius: '3px',
      fontFamily: 'inherit',
      fontSize: '12px'
    },
    formControls: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    commentButton: {
      background: 'linear-gradient(to bottom, #4CAF50, #45A049)',
      border: '1px solid #3D8B3D',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
      textShadow: '1px 1px 0 #333'
    },
    anonymousCheck: {
      fontSize: '11px',
      color: '#666'
    },
    commentsList: {
      borderTop: '1px solid #DDD',
      paddingTop: '15px'
    },
    comment: {
      background: '#FFFFEE',
      border: '1px solid #DDDDCC',
      margin: '8px 0',
      padding: '6px',
      borderRadius: '3px',
      boxShadow: '1px 1px 3px rgba(0,0,0,0.1)'
    },
    commentHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '4px'
    },
    commentAuthor: {
      fontWeight: 'bold',
      color: '#3B5998'
    },
    commentTime: {
      color: '#666',
      fontSize: '10px'
    },
    commentText: {
      color: '#333',
      lineHeight: '1.4'
    },
    footer: {
      borderTop: '2px solid #CCC',
      marginTop: '20px',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '11px'
    },
    footerLinks: {
      display: 'flex',
      gap: '8px'
    },
    footerLink: {
      color: '#3B5998',
      textDecoration: 'none'
    },
    counter: {
      color: '#666',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.navBar}>
        <div style={styles.logo}>THE HUB</div>
        <div style={styles.navLinks}>
          <span style={styles.navItem}>home</span>
          <span style={styles.navItem}>browse</span>
          <span style={styles.navItem}>search</span>
          <span style={styles.navItem}>invite</span>
          <span style={styles.navItem}>film</span>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.leftColumn}>
          <div style={styles.profileBox}>
            <div style={styles.profileHeader}>
              <img src={profile.avatar} alt="Profile" style={styles.profileImage} />
              <div style={styles.profileStatus}>
                <div style={styles.statusLight} /> Currently: {profile.status}
              </div>
            </div>
            <div style={styles.musicPlayer}>
              {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
              <marquee behavior="scroll" direction="left">
                Now Playing: {profile.music}
              </marquee>
            </div>
          </div>

          <div style={styles.friendsBox}>
            <div style={styles.sectionHeader}>
              <img src="data:image/gif;base64,R0lGODlhEAAQAKECAAAAAP///////yH5BAEKAAIALAAAAAAQABAAAAIqlI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwAIf8L" alt="star" style={styles.headerIcon} />
              Top Friends (8/327)
            </div>
            {[...Array(8)].map((_, i) => (
              <div key={i} style={styles.friendItem}>
                <div style={styles.friendNumber}>{i + 1}.</div>
                <div style={styles.friendAvatar} />
                <div style={styles.friendInfo}>
                  <div style={styles.friendName}>Friend {i + 1}</div>
                  <div style={styles.friendStatus}>"Hey whats up??"</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.videoSection}>
            <div style={styles.sectionHeader}>
              <img src="data:image/gif;base64,R0lGODlhEAAQAKECAAAAAP///////yH5BAEKAAIALAAAAAAQABAAAAIqlI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwAIf8L" alt="note" style={styles.headerIcon} />
              Music Videos
            </div>

            <label style={styles.uploadLabel}>
              Upload New Video
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                style={{ display: 'none' }}
              />
            </label>

            <div style={styles.videoPlayer}>
              {videos.find(v => v.id === selectedVideo) ? (
                <video 
                  key={selectedVideo}
                  controls 
                  style={{ width: '100%', height: '100%' }}
                >
                  <source 
                    src={videos.find(v => v.id === selectedVideo).url} 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div style={{ 
                  color: '#3B5998',
                  display: 'flex',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontStyle: 'italic'
                }}>
                  Select a video to play
                </div>
              )}
            </div>

            <div style={styles.videoList}>
              {videos.map(video => (
                <div 
                  key={video.id}
                  style={{
                    ...styles.videoThumbnail,
                    border: video.id === selectedVideo 
                      ? '3px solid #3B5998' 
                      : '3px solid #C0C0C0'
                  }}
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div style={styles.videoPreview}>
                    <video
                      muted
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      src={video.url}
                    />
                  </div>
                  <div style={styles.videoTitle}>{video.title}</div>
                  <div style={styles.videoDate}>{video.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.commentsBox}>
            <div style={styles.sectionHeader}>
              <img src="data:image/gif;base64,R0lGODlhEAAQAKECAAAAAP///////yH5BAEKAAIALAAAAAAQABAAAAIqlI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwAIf8L" alt="star" style={styles.headerIcon} />
              Comments ({comments.length})
            </div>
            <form onSubmit={handleSubmit} style={styles.commentForm}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                style={styles.commentInput}
                placeholder="Post a new comment..."
              />
              <div style={styles.formControls}>
                <button type="submit" style={styles.commentButton}>Post Comment</button>
                <label style={styles.anonymousCheck}>
                  <input type="checkbox" /> Post Anonymously
                </label>
              </div>
            </form>
            <div style={styles.commentsList}>
              {comments.map(comment => (
                <div key={comment.id} style={styles.comment}>
                  <div style={styles.commentHeader}>
                    <span style={styles.commentAuthor}>{comment.author}</span>
                    <span style={styles.commentTime}>{comment.timestamp}</span>
                  </div>
                  <div style={styles.commentText}>"{comment.text}"</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#about" style={styles.footerLink}>about</a>
          <a href="#faq" style={styles.footerLink}>faq</a>
          <a href="#terms" style={styles.footerLink}>terms</a>
        </div>
        <div style={styles.counter}>
          <img src="data:image/gif;base64,R0lGODlhCQAJAIABAAAAAP///yH5BAEAAAEALAAAAAAJAAkAAAIKjI+py+0Po5y02gA7" alt="counter" />
          1337 visitors
        </div>
      </div>
    </div>
  );
};

export default Hub;