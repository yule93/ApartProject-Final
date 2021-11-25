package com.ssafy.vue.model.service;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.model.CommentDto;
import com.ssafy.vue.model.mapper.CommentMapper;

@Service
public class CommentServiceImpl implements CommentService{
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean writeMemo(CommentDto commentDto) throws Exception {
		if(commentDto.getComment() == null ) {
			throw new Exception();
		}
		return sqlSession.getMapper(CommentMapper.class).writeMemo(commentDto) == 1;
	}
	
	
}
