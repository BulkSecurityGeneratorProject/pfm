package com.anil.pfm.mf.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.anil.pfm.mf.service.dto.MFRTAgentDTO;

/**
 * Service Interface for managing MFRTAgent.
 */
public interface MFRTAgentService {

    /**
     * Save a mFRTAgent.
     *
     * @param mFRTAgentDTO the entity to save
     * @return the persisted entity
     */
    MFRTAgentDTO save(MFRTAgentDTO mFRTAgentDTO);

    /**
     *  Get all the mFRTAgents.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<MFRTAgentDTO> findAll(Pageable pageable);

    /**
     *  Get the "id" mFRTAgent.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    MFRTAgentDTO findOne(Long id);

    /**
     *  Delete the "id" mFRTAgent.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
