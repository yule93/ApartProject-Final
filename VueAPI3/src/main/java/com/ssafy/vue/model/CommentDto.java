package com.ssafy.vue.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "CommentDto : 댓글정보", description = "댓글의 상세 정보를 나타낸다.")
public class CommentDto {
	@ApiModelProperty(value = "댓글번호")
	private int memono;
	@ApiModelProperty(value = "작성자 아이디")
	private String userid;
	@ApiModelProperty(value = "댓글내용")
	private String comment;
	@ApiModelProperty(value = "작성일")
	private String memotime;
	@ApiModelProperty(value = "게시물번호")
	private int articleno;
	public int getMemono() {
		return memono;
	}
	public void setMemono(int memono) {
		this.memono = memono;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getMemotime() {
		return memotime;
	}
	public void setMemotime(String memotime) {
		this.memotime = memotime;
	}
	public int getArticleno() {
		return articleno;
	}
	public void setArticleno(int articleno) {
		this.articleno = articleno;
	}
	
}
