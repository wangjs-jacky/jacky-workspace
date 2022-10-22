---
group:
  title: Trick 篇
---



## 案例知识点拆解

### 制造间隙的两种方式：

1. 直接 `flex + justify-align: space-between`

   参考案例： 实现 [心形加载条](../css/variable#心形加载条) 心脏的切片效果

   ```css
   ul {
     display: flex;
     justify-content: space-between;
     width: 150px;
     li {
       width: 10px;
     }
   }
   ```

2. 使用 `+` 技巧

   参考案例：实现 [条形加载条](../css/variable#条形加载条) 心脏的切片效果

   ```css
   li {
     & + li {
       margin-left: 5px;
     }
   }
   ```

### 巧用 `css` 变量实现 `display:block` 效果

- 参考案例：实现 [悬浮按钮](../css/variable#悬浮按钮) 灯光入场效果。

  ```css
  &::before {
    width: var(--size);
    height: var(--size);
    --size: 0px;
    /* 添加渐进渐出的效果 */  
    transition: width 200ms ease, height 200ms ease;
  }
  
  &:hover:before {
    --size: 400px;
  }
  ```



### 如何实现一个鼠标跟随效果？

实现前提：鼠标的坐标点需保持在物体的中心。

- 参考案例：实现 [悬浮按钮](../css/variable#悬浮按钮) 中鼠标的中心始终与光源的中心保持一致。

  ```css
  ::before {
    position: absolute;
    right: 0;
    left: 0;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
  }
  
  /* 如果居中，直接添加 margin-left/top */
  ::before {
    + margin-left: 50%;
    + margin-top: 50%;
  }







## 
